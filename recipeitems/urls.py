from django.urls import path
from recipeitems.views import show_recipe

urlpatterns = [path("recipes/", show_recipe)]
