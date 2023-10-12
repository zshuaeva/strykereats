from django.urls import path
from . import views
from recipeitems.views import RecipeListView

urlpatterns = [
    path("recipes/<int:recipe_id>", RecipeListView.as_view(), name="recipe_title"),
    path("api/recipes/", views.get_recipes, name="get_recipes"),
]
