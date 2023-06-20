import React, { useEffect, useState } from 'react';
import { CommentModel } from './models';
import { Comment } from './components/comment/Comment';

export const App: React.FC = () => {
  const [comments, setData] = useState<CommentModel[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then(({ comments }: { comments: CommentModel[] }) => setData(comments))
      .catch((error) => console.error(error));
  }, []);

  const commentNodes = comments?.map((commentItem: CommentModel) => (
    <Comment key={commentItem.id} comment={commentItem} />
  ));

  return <div className="container">{commentNodes}</div>;
};
