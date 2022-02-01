import axios from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser, saveAuthTokens } from '../redux/authSlice';

const baseURL = 'http://localhost:8000/api/';
const useAxios = () => {
    const dispatch = useDispatch();
    const authTokens = useSelector((state) => state.user.authTokens);
    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: 'Bearer ' + String(authTokens?.access),
        },
    });
    axiosInstance.interceptors.request.use(async (request) => {
        const user = jwtDecode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        console.log(isExpired);
        if (!isExpired) return request;

        const response = await axios.post(baseURL + 'token/refresh/', {
            refresh: authTokens.refresh,
        });

        localStorage.setItem('authTokens', JSON.stringify(response.data));
        dispatch(saveAuthTokens(response.data));
        dispatch(saveUser(jwtDecode(response.data.access)));
        request.headers.Authorization =
            'Bearer ' + String(response.data.access);
        return request;
    });

    return axiosInstance;
};

export default useAxios;
