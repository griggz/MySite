# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-21 01:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('argent', '0008_auto_20180420_2019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]