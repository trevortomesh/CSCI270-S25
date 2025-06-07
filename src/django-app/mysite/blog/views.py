from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import FeedbackForm
from .models import Book


# Create your views here.
def home(request):
    return HttpResponse("Welcome to the blog homepage!")

def feedback_view(request):
    if request.method == "POST":
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('feedback')

    else:
        form = FeedbackForm()
    return render(request, 'blog/feedback.html', {'form': form})

def book_list(request):
    books = Book.objects.all() #Query all books from the database
    return render(request, 'books/book_list.html', {'books': books})