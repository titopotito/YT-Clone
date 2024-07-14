from rest_framework import serializers
from .models import UploadedVideo


class UploadedVideoListCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedVideo
        fields = [
            'title',
            'owner',
            'video',
            'thumbnail',
            'description',
            'tags',
            'playlist',
            'visibility',
        ]


class UploadedVideoDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedVideo
        fields = [
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
