from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def homePage(request):
    homePage=open("static/index.html").read()
    return HttpResponse(homePage)