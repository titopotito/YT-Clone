from django.urls import path, include
from .views import UploadedVideoListCreateView, UploadedVideoDetailView, UploadedVideoUpdateView, UploadedVideoDeleteView

urlpatterns = [
    path('', UploadedVideoListCreateView.as_view()),
    path('/<int:pk>', UploadedVideoDetailView.as_view()),
    path('/<int:pk>/update', UploadedVideoUpdateView.as_view()),
    path('/<int:pk>/delete', UploadedVideoDeleteView.as_view()),
]
