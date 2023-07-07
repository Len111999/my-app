import React, {useEffect, useState} from 'react';
import styles from './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoverColor, setHoverColor] = useState('#b3c8fe');

  useEffect(() =>{
    const colors = ['#D03DFF', '#FF3DB8', '#FF3D3D', '#FFC73D', '#4FFF3D', '#3DE5FF', '#463DFF'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setHoverColor(colors[currentIndex]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className={styles.nav} style={{'--hover-color': hoverColor }}>
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
                    <img src='./Login.png' alt= "Login" width="25" height="25"/>
                </Link>
            </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
