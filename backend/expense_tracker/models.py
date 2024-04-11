from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Kosar(models.Model):
    nameoftheproduct= models.CharField(max_length = 255)
    pice = models.IntegerField()
    quantity = models.IntegerField()
    shopping_date = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"költés {self.pice} HUF"
    
class ProfileDatas(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    lakcim=models.CharField(max_length=255, null=True, blank=True )
    keresztnev=models.CharField(max_length=255, null=True, blank=True )
    vezeteknev=models.CharField(max_length=255, null=True, blank=True )

class Megrendeles1(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    lakcim=models.CharField(max_length=255, null=True, blank=True )
    keresztnev=models.CharField(max_length=255, null=True, blank=True )
    vezeteknev=models.CharField(max_length=255, null=True, blank=True )

 