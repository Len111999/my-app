import React from 'react';
import styles from './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className="logo">
          <Link to="/Inicio">N-EX <span className={styles.mini}></span></Link>
        </li>
        <li>
          <Link to="/Soluciones">Soluciones</Link>
        </li>
        <li>
          <Link to="/Socios">Socios</Link>
        </li>
        <li>
          <Link to="/Productos">Productos</Link>
        </li>
        <li>
          <div>
            <Link to="/Login">
              <img src="./Login.png" alt="Login" width="25" height="25" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;