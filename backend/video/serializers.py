from rest_framework import serializers
from .models import UploadedVideo


class UploadedVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedVideo
        fields = [
            'pk',
            'title',
            'owner',
            'video',
            'thumbnail',
            'description',
            'tags',
            'playlist',
            'visibility',
            'datetime_uploaded',
            'views',
            'likes',
            'dislikes'
        ]
