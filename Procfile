release: python manage.py migrate
web: gunicorn config.wsgi:application

{% if cookiecutter.use_celery == "y" -%}
worker: celery worker --app={{cookiecutter.project_slug}}.taskapp --loglevel=info
{%- endif %}
