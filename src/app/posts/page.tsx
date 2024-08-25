import PostsList from '@/components/posts/post-list';
import PostsHeader from '@/components/posts/posts-header';

export default function PostsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-16">
      <section className="flex flex-col gap-10 w-1/2">
        <PostsHeader />
        <PostsList />
      </section>
    </main>
  );
}
