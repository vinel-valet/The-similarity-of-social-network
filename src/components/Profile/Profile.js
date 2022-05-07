import React from "react";
import './Profile.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className='profileCounter'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}
export default Profile;