from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Step(models.Model):
    step = models.CharField(max_length=250)
    length = models.IntegerField(null=True)

    def __str__(self):
        return self.step


class Recipe(models.Model):
    recipe_title = models.CharField(max_length=150)
    cook_type = models.CharField(max_length=50)
    recipe_length = models.IntegerField()
    ingredients = models.ManyToManyField(Ingredient)
    date_added = models.DateField()
    steps = models.ForeignKey(Step, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.recipe_title
