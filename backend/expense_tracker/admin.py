from django.contrib import admin
from .models import Kosar, ProfileDatas
from expense_tracker.models import Megrendeles1
# Register your models here.

admin.site.register(Kosar)
admin.site.register(ProfileDatas)
admin.site.register(Megrendeles1)
