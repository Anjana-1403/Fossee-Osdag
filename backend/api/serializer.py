from rest_framework import serializers
from .models import connectionsub

class cserializer(serializers.ModelSerializer):
    class Meta:
        model=connectionsub
        fields='__all__'


