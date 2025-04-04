from django.urls import path
from .import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/tab/<str:tab_name>/', views.tab_view), 
    path('tabs/', views.get_tabs, name='get_tabs'),  
    path('tab-content/<int:connection_id>/', views.get_tab_content, name='get_tab_content'),
    path('Base/', views.get_base, name='get_base'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
