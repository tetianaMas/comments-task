import React, { useEffect, useState } from 'react';
import { CommentModel } from './models';
import { Form } from './components/form/Form';
import { CommentList } from './components/comment-list/CommentList';

export const App: React.FC = () => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then(({ comments }: { comments: CommentModel[] }) => setComments(comments))
      .catch((error) => console.error(error));
  }, []);

  const addComment = (text: string) => {
    const ids = comments.reduce((acc: number[], next: CommentModel) => {
      acc.push(next.id);
      return acc;
    }, [] as number[]);
    const newId = Math.max(...ids) + 1;
    const commentModel: CommentModel = {
      body: text,
      id: newId,
      postId: newId,
      user: {
        id: Math.random() * 10,
        username: 'Me Myself',
      },
    };
    setComments([...comments, commentModel]);
  };

  const deleteComment = (commentIdToDelete: number) => {
    const commentToDelete = comments.find(({ id }) => id === commentIdToDelete);
    if (commentToDelete) {
      const commentsToUpdate = [...comments];
      commentsToUpdate.splice(commentsToUpdate.indexOf(commentToDelete), 1);
      setComments(commentsToUpdate);
    }
  };

  return (
    <main className="container">
      <CommentList comments={comments} onDeleteComment={deleteComment} />
      <Form onSubmitClick={addComment} />
    </main>
  );
};
