from . import views
from blog.views import Home, postview, delete
from django.urls import path

urlpatterns = [
    path('', Home, name='home'),
    path('posts/', views.PostList.as_view(), name='post_list'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('like/<slug:slug>', views.PostLike.as_view(), name='post_like'),
    path('post/new/', views.postview, name='post_create'),
    path('delete/<int:pk>/', views.delete, name='delete'),
    path('edit/<int:pk>/', views.edit, name='edit'),
]
