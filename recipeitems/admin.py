from django.contrib import admin
from .models import Ingredient, Recipe, Step

# Register your models here.
admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Step)
