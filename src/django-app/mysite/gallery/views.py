from django.shortcuts import render, redirect
from .models import Photo
from .forms import PhotoForm

# Create your views here.
def upload_photo(request):
    if request.method == 'POST':
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('gallery')
    else:
        form = PhotoForm()
    return render(request, 'gallery/upload.html', {'form': form})

def view_gallery(request):
    photos = Photo.objects.all().order_by('-uploaded_at')
    return render(request, 'gallery/view.html', {'photos': photos})