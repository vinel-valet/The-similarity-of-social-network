import React from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://img.dni.ru/binaries/v3_main/467896.jpg'/>
      </div>
      <div>
        <img
          src='https://img1.freepng.ru/20180423/alq/kisspng-logo-dragon-graphic-design-dragon-logo-5ade0b7811f273.9777779215245013680735.jpg'/>
      </div>
      <div>
        <MyPosts/>
      </div>
    </div>
  );
}
export default Profile;