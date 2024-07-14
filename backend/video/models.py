from django.db import models
from django.core.validators import FileExtensionValidator, validate_image_file_extension


VALID_EXTENSIONS = {
    'MOV': 'MOV',
    'AVI': 'avi',
    'MP4': 'mp4',
    'WEBM': 'webm',
    'MKV': 'mkv'
}


class UploadedVideo(models.Model):
    PUBLIC = 'PU'
    PRIVATE = 'PR'
    VISIBILITY = {
        PUBLIC: "Public",
        PRIVATE: "Private"
    }

    def default_tags():
        return []

    def get_valid_extensions():
        return VALID_EXTENSIONS.values()

    owner = models.CharField(max_length=100, default='jesmar')
    title = models.CharField(max_length=100)
    video = models.FileField(
        upload_to='videos_uploaded/%Y/%m/%d',
        null=True,
        validators=[FileExtensionValidator(
            allowed_extensions=get_valid_extensions())]
    )
    thumbnail = models.ImageField(
        upload_to='thumbnail/%Y/%m/%d',
        validators=[validate_image_file_extension]
    )
    description = models.CharField(max_length=2000)
    tags = models.JSONField(default=default_tags)
    playlist = models.CharField(max_length=100, blank=True)
    visibility = models.CharField(
        max_length=3, choices=VISIBILITY, default=VISIBILITY[PUBLIC])
    datetime_uploaded = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)