# applications/serializers.py

from rest_framework import serializers
from .models import Application

class ApplicationSerializer(serializers.ModelSerializer):
    resume_url = serializers.SerializerMethodField()

    class Meta:
        model = Application
        fields = '__all__'

    def get_resume_url(self, obj):
        if obj.resume:
            return obj.resume.url
        return None
