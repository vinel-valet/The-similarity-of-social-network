import React from "react";
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='profileInfo'>
            <div>
                <img className='fonImg' src={require('./fon.png')}/>
            </div>
            <div>
                <img className='avatarImg' src={require('./avatar.jpg')}/>
            </div>
        </div>
    );
}
export default ProfileInfo;