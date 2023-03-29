from django.urls import path
from . import views, api

urlpatterns = [
    path('apply/', views.apply, name='apply'),
    path('list/', views.applications_list, name='applications_list'),
    path('api/applications/', api.ApplicationListAPIView.as_view(), name='api_applications'),
]
