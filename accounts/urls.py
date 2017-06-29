from django.conf.urls import url
from django.contrib.auth.views import (password_reset, password_reset_done,
                                       password_reset_confirm, password_reset_complete)
from accounts.views import (login_view, register_view, logout_view)

urlpatterns = [
    url(r'^login/$', login_view, name='login'),
    url(r'^logout/$', logout_view, name='logout'),
    url(r'^register/$', register_view, name='register'),

    url(r'^reset-password/$', password_reset, {'template_name': 'accounts/reset_password.html', 'post_reset_redirect': 'accounts:password_reset_done', 'email_template_name': 'accounts/reset_password_email.html'}, name='reset_password'),

    url(r'^reset-password/done/$', password_reset_done, {'template_name': 'accounts/reset_password_done.html'}, name='password_reset_done'),

    url(r'^reset-password/confirm/(?P<uidb64>[0-9A-Za-z]+)-(?P<token>.+)/$', password_reset_confirm, {'template_name': 'accounts/reset_password_confirm.html', 'post_reset_redirect': 'accounts:password_reset_complete'}, name='password_reset_confirm'),


    url(r'^reset-password/complete/$', password_reset_complete, {'template_name': 'accounts/reset_password_complete.html'}, name='password_reset_complete'),

]
