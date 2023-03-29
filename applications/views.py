from django.shortcuts import render
from .models import Application
from .forms import ApplicationForm

def apply(request):
    if request.method == 'POST':
        form = ApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, 'applications/success.html')
    else:
        form = ApplicationForm()

    return render(request, 'applications/apply.html', {'form': form})

def applications_list(request):
    applications = Application.objects.all()
    return render(request, 'applications/list.html', {'applications': applications})
