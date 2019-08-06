from .models import Post, new_posts
from rest_framework import generics, permissions, pagination
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from .serializers import PostSerializer
# from .utils import get_read_time
# Create your views here.


# New methods for REACT-JS
class PostPageNumberPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'size'
    max_page_size = 20

    def get_paginated_response(self, data):
        author = False
        user = self.request.user
        if user.is_authenticated:
            author = True
        context = {
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'author': author,
            'results': data,
        }
        return Response(context)


class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset            = Post.objects.all()
    serializer_class    = PostSerializer
    lookup_field        = 'slug'
    permission_classes  = [IsOwnerOrReadOnly]

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context['request'] = self.request
    #     return context


class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset            = Post.objects.all()
    serializer_class    = PostSerializer
    permission_classes  = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class    = PostPageNumberPagination

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

