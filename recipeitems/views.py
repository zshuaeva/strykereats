from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import DetailView, ListView
from .models import Recipe
from django.core import serializers


class RecipeListView(ListView):
    model = Recipe
    template_name = "recipe/recipe_list.html"
    context_object_name = "recipes"


class RecipeDetailView(DetailView):
    model = Recipe
    template_name = "recipe/recipe_detail.html"
    context_object_name = "recipe"


from django.http import JsonResponse
from django.core import serializers
from .models import Recipe


def get_recipes(request):
    recipes = Recipe.objects.all()
    serialized_data = serializers.serialize("json", recipes)
    data = []

    for recipe in recipes:
        ingredients = [ingredient.name for ingredient in recipe.ingredients.all()]

        data.append(
            {
                "recipe_title": recipe.recipe_title,
                "cook_type": recipe.cook_type,
                "recipe_length": recipe.recipe_length,
                "date_added": recipe.date_added,
                # "ingredients": recipe.ingredients,
                # "steps": recipe.steps,
            }
        )

    return JsonResponse(data, safe=False)
