from rest_framework import serializers
from .models import WORK

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = WORK
        fields = ['T_name','T_id','T_status','Start_tym','End_tym','Create_date','Approval_status','Assigned_manager','T_description']