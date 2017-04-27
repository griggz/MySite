# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-27 08:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('argent', '0005_auto_20170427_1038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='currency',
            field=models.CharField(blank=True, choices=[('USD', '(USD)US Dollar'), ('EUR', '(EUR)Euro'), ('GBP', '(GBP)United Kingdom Pound'), ('CZK', '(CZK)Czech Republic Koruna'), ('HUF', '(HUF)Hungary Forint')], max_length=900, null=True),
        ),
    ]
