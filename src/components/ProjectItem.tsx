// 

import React from 'react';
import Image from 'next/image';
import styles from './ProjectItem.module.css';
import { Ubuntu_Mono } from 'next/font/google';
import Link from 'next/link';

const ubuntu = Ubuntu_Mono({ weight: ['400'], subsets: ['latin'] });

interface FormProps {
  iconSrc: string;
  alt: string;
  projectTitle: string;
  caption: string;
  projectUri: string;
}

const ProjectItem: React.FC<FormProps> = ({ iconSrc, alt, projectTitle, caption, projectUri }) => {
  return (
    <Link href={projectUri} className={styles.cardLink}>
      <article className={`${styles.projectItemContainer} ${ubuntu.className}`}>
        <div className={styles.imageContainer}>
          <Image
            src={iconSrc}
            alt={alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>{projectTitle}</h3>
          <p className={styles.p}>{caption}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectItem;
