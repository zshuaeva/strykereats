from django.urls import path
from recipeitems.views import RecipeListView

urlpatterns = [
    path("recipes/<int:recipe_id>", RecipeListView.as_view(), name="recipe_title"),
]
