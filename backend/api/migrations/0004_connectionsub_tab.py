# Generated by Django 5.2 on 2025-04-05 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_connectionsub_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='connectionsub',
            name='tab',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]
