# Generated by Django 5.2 on 2025-04-05 05:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Base',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('basename', models.TextField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='connection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=100, unique=True)),
                ('base', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Base', to='api.base')),
            ],
        ),
        migrations.CreateModel(
            name='connectionsub',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=100)),
                ('name', models.TextField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='connection', to='api.connection')),
            ],
        ),
    ]
