import React from 'react';

import { CgHome } from 'react-icons/cg';
import { FiSend, FiHeart } from 'react-icons/fi';
import { MdExplore } from 'react-icons/md';

import ImageProfile from '../../components/ImageProfile';

import './style.css';

export default function Feed(){
  return(
    <div className="instagram-wrapper">
      <navbar className="navbar">
        <div className="menu-group">
          <div className="top-menu">
            <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"/>
          </div>

          <div className="find">
            <input type="text" placeholder="Pesquisar"></input>
          </div>

          <div className="icons">
            <div className="insta-icon">
              <CgHome size="25px"/>
            </div>
            <div className="insta-icon">
              <FiSend size="25px"/>
            </div>
            <div className="insta-icon">
              <MdExplore size="25px"/>
            </div>
            <div className="insta-icon">
              <FiHeart size="25px"/>
            </div>
            <div className="insta-icon">
              <ImageProfile size="35px"/>
            </div>

          </div>  
        </div>
      </navbar>
    </div>
  )
}