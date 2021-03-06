from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework import generics

from .models import Product
from api.serializers import ProductSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/products/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of Products'
        },
        {
            'Endpoint': '/product/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single product object'
        },
        {
            'Endpoint': '/product/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new product with data sent in post request'
        },
        {
            'Endpoint': '/product/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing product with data sent in post request'
        },
        {
            'Endpoint': '/product/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting product'
        },
        {
            'Endpoint': '/token',
            'method': 'POST',
            'body': {'username': '', 'password': ''},
            'description': 'Authenticate user'
        },
        {
            'Endpoint': '/token/refresh',
            'method': 'POST',
            'body': {'refreshToken': ''},
            'description': 'Refreshes the AUTH JWT tokens'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    notes = Product.objects.all()
    serializer = ProductSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    note = Product.objects.get(id=pk);
    serializer = ProductSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request):
    data = request.data
    note = Product.objects.create(
        name=data['name'],
        price=data['price'],
        stock=data['stock'],
    )
    serializer = ProductSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateProduct(request, pk):
    note = Product.objects.get(id=pk)
    data = request.data
    serializer = ProductSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    
@api_view(['DELETE'])
def deleteProduct(request, pk):
    Product.objects.get(id=pk).delete()
    return Response('Note was Deleted')