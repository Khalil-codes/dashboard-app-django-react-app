from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(null=True, blank=True, max_length=255)
    price = models.PositiveIntegerField(default=0)
    stock = models.PositiveIntegerField(default=0)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name