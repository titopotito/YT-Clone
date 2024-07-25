from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator, validate_image_file_extension


VALID_EXTENSIONS = {
    'MOV': 'MOV',
    'AVI': 'avi',
    'MP4': 'mp4',
    'WEBM': 'webm',
    'MKV': 'mkv'
}


class UploadedVideo(models.Model):
    PUBLIC = 'Public'
    PRIVATE = 'Private'
    VISIBILITY = {
        PUBLIC: "Public",
        PRIVATE: "Private"
    }

    def default_tags():
        return []

    def get_valid_extensions():
        return VALID_EXTENSIONS.values()

    owner = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    video = models.FileField(
        upload_to='videos_uploaded/%Y/%m/%d',
        blank=True,
        null=True,
        validators=[FileExtensionValidator(
            allowed_extensions=get_valid_extensions())]
    )
    thumbnail = models.ImageField(
        upload_to='thumbnail/%Y/%m/%d',
        validators=[validate_image_file_extension]
    )
    description = models.CharField(max_length=2000)
    tags = models.JSONField(default=default_tags, blank=True, null=True)
    playlist = models.CharField(max_length=100, blank=True, null=True)
    visibility = models.CharField(
        max_length=7, choices=VISIBILITY, default=PUBLIC, blank=True, null=True)
    datetime_uploaded = models.DateTimeField(auto_now_add=True)
    comments = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
