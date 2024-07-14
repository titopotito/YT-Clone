from django.http import HttpResponse, JsonResponse
from rest_framework import generics
from .models import UploadedVideo
from .serializers import UploadedVideoListCreateSerializer, UploadedVideoDetailSerializer


def videos(request):
    return JsonResponse({"hello": "Hello"})


class UploadedVideoListCreateView(generics.ListCreateAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoListCreateSerializer


class UploadedVideoDetailView(generics.RetrieveAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoDetailSerializer
