import React from 'react';
import styles from './Header.module.css';

function Header() {
  const navItems = ['HOME', 'PRODUCT', 'CONTACT US', 'ABOUT US', 'LOGIN'];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a href="#" className={item === 'LOGIN' ? styles.loginLink : ''}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;