import React from 'react';
import styles from './Footer.module.css';
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
  });

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <nav className={styles.navbar}> 
            <ul className={styles.navList}> 
                <div className={styles.iconLinks}>
                <li>
                    <a href="https://github.com/gaurabacharya/" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gaurab-acharya/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} />
                    </a>
                </li>
                <li>
                    <a href="mailto:gaurab_acharya@outlook.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={40} />
                    </a>
                </li>
                </div>
            </ul>
        </nav>
      <p>© 2024 Gaurab's Website. All rights reserved. Made with React and NextJS.</p>
    </footer>
  );
};

export default Footer;
