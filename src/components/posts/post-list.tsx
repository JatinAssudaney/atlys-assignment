import { posts } from '@/models/constants/posts.constants';
import PostItem from './post-item';
import PostCreate from '@/components/posts/post-create';

const PostsList = () => {
  return (
    <section className="flex flex-col gap-4">
      <PostCreate />
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </section>
  );
};

export default PostsList;
