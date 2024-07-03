from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def videos(request):
    return JsonResponse({"hello": "Hello"})
