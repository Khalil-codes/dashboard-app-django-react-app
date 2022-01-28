import React from 'react';
import defaultProfilePic from '../../../assets/Images/default-user.jpeg';
import styles from './UserProfile.module.css';
import Button from '../../../components/Button';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const currentUser = useSelector((state) => state.user.user);
    const url = false;
    return (
        <div className={styles.userProfileContainer}>
            <div className={styles.card}>
                <div className={styles.profileImgUtils}>
                    <img src={defaultProfilePic} alt="" />
                    <Button className={styles.uploadProfileButton}>
                        Upload Profile Picture
                    </Button>
                </div>
                <div className={styles.userDetailsWrapper}>
                    <div className={styles.fields}>
                        Name: {currentUser?.fullName}
                    </div>
                    <div className={styles.fields}>
                        Email: {currentUser.email}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
