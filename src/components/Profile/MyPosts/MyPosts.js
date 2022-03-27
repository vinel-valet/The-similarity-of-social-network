import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className='myPosts'>
      My Posts
      <div>
        <textarea/>
        <button>Add post</button>
      </div>
      <div className='posts'>
        <Post message = 'Hi, how are you?'/>
        <Post message = "It's my first post"/>
      </div>
    </div>
);
}
export default MyPosts;