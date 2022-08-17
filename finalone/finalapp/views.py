from django.shortcuts import render
from rest_framework import viewsets
from.models import WORK
from.serializers import WorkSerializer

# Create your views here.
class Workviewset(viewsets.ModelViewSet):

   serializer_class= WorkSerializer
   queryset=WORK.objects.all()