from django.urls import path
from . import views

urlpatterns = [
     path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('product/create', views.createProduct, name="createProduct"),
    path('product/<str:pk>/update', views.updateProduct, name="updateProduct"),
    path('product/<str:pk>/delete', views.deleteProduct, name="deleteProduct"),
    path('product/<str:pk>/', views.getProduct, name="note")
]