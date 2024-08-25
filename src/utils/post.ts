import {
  MINUTES_IN_DAY,
  SECONDS_IN_DAY,
} from '@/models/constants/posts.constants';
import { Post } from '@/models/interfaces/posts.interface';

export function getDate(post: Post): {
  value: string;
  unit: 'minutes' | 'hours' | 'date';
} {
  const { lastUpdated, updatedAt } = post;

  if (lastUpdated >= SECONDS_IN_DAY)
    return {
      value: new Date(updatedAt * 1000).toLocaleDateString(),
      unit: 'date',
    };
  else if (lastUpdated >= MINUTES_IN_DAY)
    return {
      value: Math.floor(lastUpdated / MINUTES_IN_DAY).toString(),
      unit: 'hours',
    };
  else
    return { value: Math.floor(lastUpdated / 60).toString(), unit: 'minutes' };
}
