# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-27 08:50
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('argent', '0007_auto_20170427_1040'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='euros',
            new_name='spending',
        ),
        migrations.RenameField(
            model_name='entry',
            old_name='euros_sum',
            new_name='spending_sum',
        ),
        migrations.RenameField(
            model_name='monthyear',
            old_name='total_spent_euros',
            new_name='total_spent',
        ),
        migrations.RenameField(
            model_name='savings',
            old_name='total_spent_euros',
            new_name='total_spent',
        ),
    ]
