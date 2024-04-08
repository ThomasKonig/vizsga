from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


def home(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)

            return redirect('home')
        return render( request,'main.html', {'error_message': 'Hibás Felhasználónév vagy jelszó!'})
        

    return  (render(render, 'main.html'))

def kijelentkezes(request):
    logout(request)
    return redirect('home')

def megrendeles(request):
    return  (render(render, 'megrend.html'))
def regiszracio(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2']

        if len(username)< 4:
            return render(request, 'regiszracio.html', {'error_message': 'Túl rövid Felhasználónév!'})
        if len(password)< 4:
            return render(request, 'regiszracio.html', {'error_message': 'Túl rövid jelszó!'})
        if password!=password2:
            return render(request, 'regiszracio.html', {'error_message': 'A két jelszó nem egyezik meg!'})
        if User.objects.filter(username = username).exists():
            return render(request, 'regiszracio.html', {'error_message': 'Van már ilyen felhasználó!'})
        else:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return redirect('home')

    return  (render(render, 'regiszracio.html'))