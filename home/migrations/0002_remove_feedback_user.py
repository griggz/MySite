# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-11 12:09
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedback',
            name='user',
        ),
    ]