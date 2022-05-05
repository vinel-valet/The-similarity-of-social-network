import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = ({profilePage, dispatch}) => {

    let postsElements = profilePage.posts.map(p => <Post message={p.message}/>)
    let newPostText = profilePage.newPostText;

    let onSendPostClick = () => {
        if (newPostText){
            dispatch(addPostActionCreator())
        }
    }

    let onNewPostChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className='myPosts'>
            My Posts
            <div>
                <textarea value={newPostText}
                    onChange={onNewPostChange}/>
                <button onClick={onSendPostClick}>Add post</button>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;