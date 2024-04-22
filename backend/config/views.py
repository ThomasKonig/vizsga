from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from expense_tracker.models import ProfileDatas
from expense_tracker.models import Megrendeles1

def home(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)

            return redirect('home')
        return render( request,'main.html', {'error_message': 'Hibás Felhasználónév vagy jelszó!'})
        

    return  render(request, 'main.html')

def kijelentkezes(request):
    logout(request)
    return redirect('home')

def megrendeles(request):
    if request.method=='POST':
        vezeteknev = request.POST['vezeteknev']
        keresztnev = request.POST['keresztnev']
        lakcim = request.POST['lakcim']
        telefonszam = request.POST['telefonszam']
        email = request.POST['email']
        if len(email)< 4:
            return render(request, 'megrend.html', {'error_message': 'Túl rövid a email cím!'})
        else:
            #user = User.objects.create_user( email=email)
            #user.save()


            profile = Megrendeles1(email = email, phone_number = telefonszam, lakcim=lakcim, keresztnev=keresztnev, vezeteknev=vezeteknev)
            profile.save()

    return  (render(request, 'megrendeles/megrend.html'))
    

def regiszracio(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2'] 
        #edigg jó 
        vezeteknev = request.POST['vezeteknev']
        keresztnev = request.POST['keresztnev']
        lakcim = request.POST['lakcim']
        telefonszam = request.POST['telefonszam']
        email = request.POST['email']

        if len(username)< 4:
            return render(request, 'regiszracio.html', {'error_message': 'Túl rövid Felhasználónév!'})
        if len(password)< 4:
            return render(request, 'regiszracio.html', {'error_message': 'Túl rövid jelszó!'})
        if password!=password2:
            return render(request, 'regiszracio.html', {'error_message': 'A két jelszó nem egyezik meg!'})
        if User.objects.filter(username = username).exists():
            return render(request, 'regiszracio.html', {'error_message': 'Van már ilyen felhasználó!'})
        else:
            user = User.objects.create_user(username=username, password=password, email=email)
            user.save()

            profile = ProfileDatas(user = user, phone_number = telefonszam, lakcim=lakcim, keresztnev=keresztnev, vezeteknev=vezeteknev)
            profile.save()

            return redirect('home')

    return  (render(request, 'Regisztracio/regiszracio.html'))