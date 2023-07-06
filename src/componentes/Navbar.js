import React from 'react';
import styles from './NavBar.css';
import loginImage from '../assets/Login.png';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className="logo"><a href="/">N-EX <span className={styles.mini}></span></a></li>
        <li><a href="/Soluciones">Soluciones</a></li>
        <li><a href="/Socios">Socios</a></li>
        <li><a href="/Productos">Productos</a></li>
        <li>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <a href="/Login">
                    <img src={loginImage} alt= "Login" width="25" height="25"/>
                </a>
            </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
