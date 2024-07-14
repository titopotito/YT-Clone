# Generated by Django 5.0.6 on 2024-07-11 08:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_rename_details_uploadedvideo_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='uploadedvideo',
            old_name='playlists',
            new_name='playlist',
        ),
        migrations.AlterField(
            model_name='uploadedvideo',
            name='video',
            field=models.FileField(null=True, upload_to='videos_uploaded/%Y/%m/%d', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=('MOV', 'avi', 'mp4', 'webm', 'mkv'))]),
        ),
    ]