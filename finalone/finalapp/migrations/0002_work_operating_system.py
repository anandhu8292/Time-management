# Generated by Django 4.0.6 on 2022-08-08 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finalapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='operating_system',
            field=models.CharField(blank=True, choices=[('Windows 10', 'Windows 10'), ('Windows 8', 'Windows 8'), ('Linux', 'Linux')], max_length=30, null=True),
        ),
    ]
