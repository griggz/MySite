# Generated by Django 2.1 on 2019-07-29 18:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrape', '0002_yelp_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='results',
            old_name='yelp_id',
            new_name='business',
        ),
    ]
