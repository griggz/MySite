# Generated by Django 2.1 on 2019-03-16 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_about_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='height_field',
            field=models.IntegerField(default=900),
        ),
        migrations.AddField(
            model_name='about',
            name='post_image',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='about',
            name='unsplash_url',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='about',
            name='width_field',
            field=models.IntegerField(default=1440),
        ),
    ]