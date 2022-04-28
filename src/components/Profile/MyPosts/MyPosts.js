import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

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