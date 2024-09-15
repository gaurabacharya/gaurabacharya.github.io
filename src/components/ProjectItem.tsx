import React from 'react';
import Image from 'next/image';
import styles from './ProjectItem.module.css';
import { Ubuntu_Mono } from 'next/font/google';
import Link from 'next/link';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
  });

interface FormProps {
    iconSrc: string;
    alt: string;
    projectTitle: string;
    caption: string;
    projectUri: string;
}

const ProjectItem: React.FC<FormProps> = ({iconSrc, alt, projectTitle, caption, projectUri}) => {
    return (
        <Link href={projectUri}>
            <div className={`${styles.projectItemContainer} ${ubuntu.className}`}>
                
                <div className={styles.imageContainer}>
                    <Image 
                    src={iconSrc}
                    alt={alt}
                    objectFit="cover"
                    priority={true}
                    width={300}
                    height={200}
                    className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <header className={styles.title}>{projectTitle}</header>
                    <p className={styles.p}>{caption}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default ProjectItem;