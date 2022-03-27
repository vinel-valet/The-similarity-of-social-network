import React from "react";
import './Post.css'

const Post = ({message}) => {

  return (
    <div className='item'>
      {message}
    </div>
);
}
export default Post;