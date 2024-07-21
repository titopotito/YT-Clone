from rest_framework import generics, authentication, permissions
from .models import UploadedVideo
from .serializers import UploadedVideoSerializer


class UploadedVideoListCreateView(generics.ListCreateAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UploadedVideoDetailView(generics.RetrieveAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer
    lookup_field = 'pk'


class UploadedVideoUpdateView(generics.UpdateAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]
    lookup_field = 'pk'


class UploadedVideoDeleteView(generics.DestroyAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]
    lookup_field = 'pk'
