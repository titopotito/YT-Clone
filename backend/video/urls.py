from django.urls import path, include
from .views import UploadedVideoListCreateView

urlpatterns = [
    path('', UploadedVideoListCreateView.as_view()),
]
