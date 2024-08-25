import React from 'react';
import Button from '../common/Button';

const PostCreate = () => {
  return (
    <article className="rounded-lg flex flex-col gap-4 border-2 border-primary-border bg-section-background px-5 py-6">
      <h4 className="text-primary-text text-lg font-medium text-left">
        Create post
      </h4>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-main-background p-4 rounded-lg">
          <div className="h-12 w-12 rounded-full bg-section-background grid place-items-center">
            <span className="text-lg">💬</span>
          </div>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="bg-transparent flex-1 border-none text-secondary-text outline-none font-normal text-base"
          />
        </div>
        <Button type="submit" className="place-self-end w-1/6">
          Post
        </Button>
      </form>
    </article>
  );
};

export default PostCreate;
