import React from 'react';
import Image from 'next/image';
import styles from './ImageAndText.module.css'
import { Ubuntu_Mono } from 'next/font/google';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
  });

interface FormProps {
    imageSrc: string;
    header: string;
    alt: string;
    text: string;
    text2: string;
}
  
const ImageAndText: React.FC<FormProps> = ({imageSrc, header, alt, text, text2}) => {
    let paragraphContent = (
        <div className={`${ubuntu.className} ${styles.textContainer}`}>
                <header className={styles.header}>{header}</header>
                <p className={styles.p}>{text}</p>
        </div>
    )
    if (text2.length > 1) {
        paragraphContent = (
            <div className={`${ubuntu.className} ${styles.textContainer}`}>
                <header className={styles.header}>{header}</header>
                <p className={styles.p}>{text}</p>
                <p className={styles.p}>{text2}</p>
        </div>
        )
    }

    return (
        <div className={`${ubuntu.className} ${styles.container}`}>
            <div className={styles.imageContainer}>
                <Image 
                src={imageSrc}
                alt={alt}
                width={900}
                height={900}
                objectFit="cover"
                priority={true}
                className={styles.roundedImage}
                />
            </div>
            {paragraphContent}
        </div>
    );
}

export default ImageAndText;