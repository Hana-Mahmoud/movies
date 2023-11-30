import React from "react";
import { Link } from 'react-router-dom';
import Styles from './Navbar.module.scss';

const Navbar = () => {
    return (
      <nav className={Styles.navbar}>
        <h1 className={Styles.navbar__title}>Hana's movies</h1>
        <div className={Styles.navbar__links}>
          <Link to="/" className={Styles.navbar__links__link}>Home</Link>
          <Link to="/search" className={Styles.navbar__links__link}>Search</Link>
        </div>
      </nav>
    );
  }
 
export default Navbar;