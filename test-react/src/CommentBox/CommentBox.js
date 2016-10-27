import React from 'react';
import CommentForm from '../CommentForm/index';
import CommentList from '../CommentList/index';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default CommentBox;
