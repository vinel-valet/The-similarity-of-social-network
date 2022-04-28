import React from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts}) => {
  return (
    <div className='profileCounter'>
          <ProfileInfo/>
          <MyPosts posts={posts}/>
    </div>
  );
}
export default Profile;