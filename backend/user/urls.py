from django.urls import path
from .views import CustomAuthToken, UserCreateView, UserView

urlpatterns = [
    path('login', CustomAuthToken.as_view()),
    path('register', UserCreateView.as_view()),
    path('', UserView.as_view())
]
