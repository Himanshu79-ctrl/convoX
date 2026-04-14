"""
ASGI config for chat_system_Project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
settings_module = 'chat_system_Project.deployment_settings' if 'RENDER_EXTERNAL_HOSTNAME' in os.environ else 'chat_system_Project.settings'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)
from chat_app.routing import websocket_urlpatterns
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})
