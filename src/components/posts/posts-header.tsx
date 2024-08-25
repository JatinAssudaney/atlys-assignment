const PostsHeader = () => {
  const username = 'Jatin Assudaney';
  return (
    <header className="flex flex-col gap-3">
      <h2 className="text-2xl text-primary-text">Hello {username}</h2>
      <p className="text-base text-secondary-text sm:max-w-[580px]">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
    </header>
  );
};

export default PostsHeader;
