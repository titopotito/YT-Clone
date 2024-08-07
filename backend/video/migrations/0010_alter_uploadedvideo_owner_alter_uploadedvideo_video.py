# Generated by Django 5.0.6 on 2024-07-22 11:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0009_alter_uploadedvideo_owner_alter_uploadedvideo_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadedvideo',
            name='owner',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='uploadedvideo',
            name='video',
            field=models.FileField(null=True, upload_to='videos_uploaded/%Y/%m/%d', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=('MOV', 'avi', 'mp4', 'webm', 'mkv'))]),
        ),
    ]
