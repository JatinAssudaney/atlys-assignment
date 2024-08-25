'use client';
import { Post } from '@/models/interfaces/posts.interface';
import { getDate } from '@/utils/post';
import Image from 'next/image';
import { useMemo } from 'react';

const PostItem = (props: Post) => {
  const {
    author,
    authorImage,
    createdAt,
    updatedAt,
    emoji,
    content,
    num_of_comments,
  } = props;

  const { value, text } = useMemo(() => {
    const { value, unit } = getDate(props);
    switch (unit) {
      case 'date':
        return { value, text: '' };
      case 'hours':
        return { value, text: ' hours ago' };
      case 'minutes':
        return { value, text: 'mins ago' };
      default:
        return { value, text: '' };
    }
  }, []);
  return (
    <article className="rounded-lg flex flex-col gap-4 border-2 border-primary-border bg-section-background px-5 py-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <figure className="h-11 w-11 rounded-full overflow-hidden">
            <Image
              src={authorImage}
              alt={author}
              width={44}
              height={44}
              className="object-cover"
            />
          </figure>
          <div>
            <h4 className="text-primary-text text-base font-medium">
              {author}
            </h4>
            <p className="text-sm text-secondary-text">
              {value}
              {text}
              {createdAt !== updatedAt && ' • Edited'}
            </p>
          </div>
        </div>
        <Image alt="more" src="/icons/view-more.svg" width={16} height={3} />
      </div>
      <div className="flex gap-4 bg-main-background p-4 rounded-lg">
        <span className="h-12 w-12 rounded-full bg-section-background grid place-items-center">
          {emoji}
        </span>
        <p className="flex-1 bg-transparent border-none rounded-lg text-base text-secondary-text">
          {content}
        </p>
      </div>
      <div className="flex items-center gap-2 text-secondary-text">
        <Image
          alt="Number of Comments"
          src="/icons/comment.svg"
          width={20}
          height={20}
        />
        <button className="text-sm font-medium">
          {num_of_comments} comments
        </button>
      </div>
    </article>
  );
};

export default PostItem;
