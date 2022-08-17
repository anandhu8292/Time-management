
from django.urls import path
from . import views

urlpatterns = [
    path('',views.Workviewset.as_view(), name='work')
]
