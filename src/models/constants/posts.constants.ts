import { Post } from '../interfaces/posts.interface';

export const SECONDS_IN_DAY = 86400;
export const MINUTES_IN_DAY = 3600;

export const posts: Post[] = [
  {
    id: 1,
    author: 'Theresa Webb',
    authorImage: '/images/author1.png',
    lastUpdated: 300, // in s
    createdAt: 1724590907, // timestamp in seconds
    updatedAt: 1724590907, // timestamp in seconds
    emoji: '👋',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    num_of_comments: 24,
  },
  {
    id: 2,
    author: 'Marvin McKinney',
    authorImage: '/images/author2.png',
    lastUpdated: 480, // in s
    createdAt: 1724590907, // timestamp in seconds
    updatedAt: 1724591387, // timestamp in seconds
    emoji: '😞',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    num_of_comments: 12,
  },
];
