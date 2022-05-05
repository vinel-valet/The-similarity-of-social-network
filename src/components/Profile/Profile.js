import React from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
  return (
    <div className='profileCounter'>
          <ProfileInfo/>
          <MyPosts profilePage={profilePage} dispatch={dispatch}/>
    </div>
  );
}
export default Profile;