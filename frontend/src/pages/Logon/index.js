import React from 'react';

import './style.css';

import preview from '../../images/login/instagram-page.png';
import instagramLogo from '../../images/login/instagram-logo.png';

import { AiFillFacebook } from "react-icons/ai";


export default function Logon(){
  
  return (
    <div className="logon-wrapper">
      <div className="instagram-phone">
        <img src={preview} alt="Instagram"/>
      </div>

      <div className="instagram-logon">
        <div className="group">
          <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png" alt="Instagram" className="instagram-logo"/>
          <input type="text" placeholder="Telefone, nome de usuário ou email" className="input-fields"/>
          <input type="password" placeholder="Senha" className="input-fields"/>
          <button type="submit" className="login-button">Entrar</button>
          <p className="hiddle-text">OU</p>
    
          <a href="/">
            <span className="facebook"> <sub><AiFillFacebook size="22"/> </sub>Entrar com Facebook</span>
          </a>
          
          <a href="/" className="find-password"> Esqueceu a senha?</a>
        </div>
        
        <div className="group">
          <p>Não tem uma conta? <a href="/" className="not-account">Cadastre-se</a></p>
        </div>

        <div className="get-the-app">
          <p className="get-app">Obtenha o aplicativo.</p>
          <div className="download">
            <a 
              href="https://play.google.com/store/apps/details?id=com.instagram.android" 
              target="_blank" 
              className="app-download">
            </a>

            <a 
              href="https://apps.apple.com/br/app/instagram/id389801252" 
              target="_blank" 
              className="app-download">
            </a>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}