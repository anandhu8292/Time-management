# Generated by Django 4.0.6 on 2022-08-08 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finalapp', '0003_remove_work_operating_system_alter_work_t_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work',
            name='Approval_status',
            field=models.CharField(blank=True, choices=[('Approved', 'Approved'), ('Rejected', 'Rejected')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='work',
            name='T_status',
            field=models.CharField(blank=True, choices=[('pending', 'pending'), ('completed', 'completed')], max_length=200, null=True),
        ),
    ]
