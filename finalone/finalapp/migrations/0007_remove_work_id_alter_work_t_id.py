# Generated by Django 4.0.6 on 2022-08-16 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finalapp', '0006_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='work',
            name='id',
        ),
        migrations.AlterField(
            model_name='work',
            name='T_id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
