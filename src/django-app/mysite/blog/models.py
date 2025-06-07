from django.db import models

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return f"{self.name}: {self.message}"

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_year = models.IntegerField()

    def __str__(self):
        return f"{self.title} ({self.author})"

