from django.urls import path, include
from . import views

from .views import MyTokenObtainPairView, RegisterView
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
router = routers.DefaultRouter()
router.register('create', RegisterView)

urlpatterns = [
     path('', views.getRoutes, name="routes"),
     path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('products/', views.getProducts, name="products"),
    path('product/create', views.createProduct, name="createProduct"),
    path('product/<str:pk>/update', views.updateProduct, name="updateProduct"),
    path('product/<str:pk>/delete', views.deleteProduct, name="deleteProduct"),
    path('product/<str:pk>/', views.getProduct, name="note"),
    path('user/', include(router.urls))
]