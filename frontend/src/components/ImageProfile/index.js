import React from 'react';

import './style.css';

import profileImg from '../../images/user/user-profile.jpg';

const ImageProfile = (props) => {

  return (

    <div className="profile">
      <div class="profile-photo">
          <img width={props.size} src={profileImg} alt="Profile"/>
      </div>
    </div>
  )
}


export default ImageProfile;