from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import request
from .models import connectionsub,connection,Base
from rest_framework.response import Response
from .serializer import cserializer
from rest_framework.decorators import api_view




def tab_view(request, tab_name):
    print(f"Received request for tab: {tab_name}")
    return JsonResponse({'message': f'Data for tab: {tab_name}'})


@api_view(['GET'])
def get_tab_content(request, connection_name):
    try:
        connection_obj = connection.objects.get(name=connection_name)  # Find the connection by name
        connection_items = connectionsub.objects.filter(type_id=connection_obj.id)
        data = []
        for item in connection_items:
            image_url = None
            if item.image and item.image.name:
                relative_url = item.image.url
                image_url = request.build_absolute_uri(relative_url)
                print(f"Item: {item.title}, Image URL: {image_url}")
            
            item_data = {
                "id": item.id,
                "title": item.title,
                "name": item.name,  # Include the name field
                "image": image_url,
            }
            data.append(item_data)
        
        print("sub tab content sent")
        return Response(data)
    except connection.DoesNotExist:
        return Response({"error": "Connection not found"}, status=404)


@api_view(['GET'])
def get_tabs(request):
    tabs=connection.objects.all()
    data = [{"id": tab.id, "name": tab.name} for tab in tabs]
    print("tabs sent")
    print(tabs)
    return Response(data)


@api_view(['GET'])
def get_base(request):
    base=Base.objects.all()
    data=[{"name":b.basename} for b in base]
    print("sidebar sent")
    print(data)

    return Response(data)


