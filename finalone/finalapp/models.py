from django.db import models

# Create your models here.

class WORK(models.Model):
    T_name = models.CharField(max_length=250)
    T_id = models.IntegerField(primary_key=True)
    # T_choice = (
    #         ('pending', 'pending'),
    #         ('completed', 'completed'),
    #     )
    # T_status = models.CharField(max_length=200, blank=True, null=True, choices=T_choice)
    T_status = models.CharField(max_length=250)
    Start_tym = models.TimeField()
    End_tym = models.TimeField()
    Create_date = models.DateField()
    # A_choice = (
    #         ('Approved', 'Approved'),
    #         ('Rejected', 'Rejected'),
    #     )
    # Approval_status = models.CharField(max_length=200, blank=True, null=True, choices=A_choice)
    Approval_status = models.CharField(max_length=100,null=True,blank=True)
    Assigned_manager = models.CharField(max_length=300)
    T_description = models.CharField(max_length=300)

    
