import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: "It's my first post"}
    ];

    let postsElements = posts.map(p => <Post message={p.message}/>)

    return (
        <div className='myPosts'>
            My Posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;