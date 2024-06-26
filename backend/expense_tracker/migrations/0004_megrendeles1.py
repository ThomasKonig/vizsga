# Generated by Django 5.0.4 on 2024-04-09 17:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expense_tracker', '0003_profiledatas_keresztnev_profiledatas_lakcim_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Megrendeles1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number1', models.CharField(blank=True, max_length=255, null=True)),
                ('lakcim1', models.CharField(blank=True, max_length=255, null=True)),
                ('keresztnev1', models.CharField(blank=True, max_length=255, null=True)),
                ('vezeteknev1', models.CharField(blank=True, max_length=255, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
