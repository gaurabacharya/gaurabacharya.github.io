import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
  });

const Header = () => {
  return (
    <header className={`${styles.header} ${ubuntu.className}`}>
        <h1 className={styles.name}>Gaurab Acharya</h1>
        <nav className={styles.navbar}> 
            <ul className={styles.navList}> 
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/resume">Resume</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about">About Me</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/projects">Projects</Link>
                </li>
                <div className={styles.iconLinks}>
                <li>
                    <a href="https://github.com/gaurabacharya/" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gaurab-acharya/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} />
                    </a>
                </li>
                <li>
                    <a href="mailto:gaurab_acharya@outlook.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={25} />
                    </a>
                </li>
                </div>
            </ul>
        </nav>
      
    </header>
  );
};

export default Header;
