from django.shortcuts import render
from django.views.generic import ListView
from .models import Recipe


class RecipeListView(ListView):
    model = Recipe
    template_name = "recipe/recipe_list.html"
    context_object_name = "recipes"

    def get_queryset(self):
        return Recipe.objects.all()
