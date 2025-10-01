// import React from 'react';
// import styles from './Header.module.css';
// import Link from 'next/link';
// import { Ubuntu_Mono } from 'next/font/google';
// import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

// const ubuntu = Ubuntu_Mono({
//     weight: ['400', '400'],  
//     subsets: ['latin']
//   });

// const Header = () => {
//   return (
//     // <header className={`${styles.header} ${ubuntu.className}`}>
//     //     <h1 className={styles.name}>Gaurab Acharya</h1>
//     //     <nav className={styles.navbar}> 
//     //         <ul className={styles.navList}> 
//     //             <li className={styles.navItem}>
//     //                 <Link href="/">Home</Link>
//     //             </li>
//     //             <li className={styles.navItem}>
//     //                 <Link href="/resume">Resume</Link>
//     //             </li>
//     //             <li className={styles.navItem}>
//     //                 <Link href="/about">About Me</Link>
//     //             </li>
//     //             <li className={styles.navItem}>
//     //                 <Link href="/projects">Projects</Link>
//     //             </li>
//     //             <div className={styles.iconLinks}>
//     //             <li>
//     //                 <a href="https://github.com/gaurabacharya/" target="_blank" rel="noopener noreferrer">
//     //                     <FaGithub size={25} />
//     //                 </a>
//     //             </li>
//     //             <li>
//     //                 <a href="https://www.linkedin.com/in/gaurab-acharya/" target="_blank" rel="noopener noreferrer">
//     //                     <FaLinkedin size={25} />
//     //                 </a>
//     //             </li>
//     //             <li>
//     //                 <a href="mailto:gaurab_acharya@outlook.com" target="_blank" rel="noopener noreferrer">
//     //                     <FaEnvelope size={25} />
//     //                 </a>
//     //             </li>
//     //             </div>
//     //         </ul>
//     //     </nav>
      
//     // </header>
//     <header className={`${styles.header} ${ubuntu.className}`}>
//         <div className={styles.navbar}>
//             <h1 className={styles.name}>Gaurab Acharya</h1>
//             <nav>
//             <ul className={styles.navList}>
//                 <li className={styles.navItem}><Link href="/">Home</Link></li>
//                 <li className={styles.navItem}><Link href="/resume">Resume</Link></li>
//                 <li className={styles.navItem}><Link href="/about">About Me</Link></li>
//                 <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
//             </ul>
//             </nav>
//             <div className={styles.iconLinks}>
//             <a href="https://github.com/gaurabacharya/" target="_blank" rel="noopener noreferrer"><FaGithub size={22} /></a>
//             <a href="https://www.linkedin.com/in/gaurab-acharya/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
//             <a href="mailto:gaurab_acharya@outlook.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={22} /></a>
//             </div>
//         </div>
//     </header>
//   );
// };

// export default Header;
"use client"; 
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({ weight: ['400'], subsets: ['latin'] });

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.header} ${ubuntu.className}`}>
      <div className={styles.bar}>
        <h1 className={styles.name}>
          <Link href="/" aria-label="Home">Gaurab Acharya</Link>
        </h1>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/resume">Resume</Link></li>
            <li className={styles.navItem}><Link href="/about">About Me</Link></li>
            <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>

        <div className={styles.rightSide}>
          <div className={styles.iconLinks} aria-label="Social links">
            <a href="https://github.com/gaurabacharya/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/gaurab-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="mailto:gaurab_acharya@outlook.com" aria-label="Email">
              <FaEnvelope className={styles.icon} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.menuButton}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile primary"
      >
        <ul className={styles.mobileList}>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About Me</Link></li>
          <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;