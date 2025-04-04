from django.contrib import admin
from .models import connectionsub,connection,Base

admin.site.register(Base)
admin.site.register(connectionsub)
admin.site.register(connection)

