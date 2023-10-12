from django.contrib import admin
from .models import Ingredient, Recipe, Step


@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Step)
class StepAdmin(admin.ModelAdmin):
    list_display = ("step", "length")


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ("recipe_title", "cook_type", "recipe_length", "date_added")
    filter_horizontal = ("ingredients", "steps")
