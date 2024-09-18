// components/PhotoCarousel.tsx
"use client"; // Ensure this is a client component
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoCarousel.module.css';
import Link from 'next/link';
import { Ubuntu_Mono } from 'next/font/google';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  // Specify weights you want to use (regular and bold in this case)
    subsets: ['latin']
  });

interface CarouselItem {
  src: string;
  width: number;
  height: number;
  header: string;
  text: string;
  projectUri: string;
}

interface CarouselInput {
  photos: CarouselItem[];
  title: string;
  summary: string;
  summaryButtonLink: string;
  summaryButtonText: string;
  projectButtonText: string;
  backgroundColor: string;
}

const PhotoCarousel:React.FC<CarouselInput> = ({photos, title, summary, summaryButtonLink, 
                                                summaryButtonText, projectButtonText, backgroundColor}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextPhoto, 5000);
    return () => clearInterval(autoSlide);
  }, []);
  
  return (
    <div className={styles.carouselSection} style={{background: backgroundColor}}>
        <div className={`${styles.projectTextContainer} ${ubuntu.className}`}>
            <h2>{title}</h2>
            <p>{summary}</p>
            <div style={{paddingTop: "20px"}}>
                <Link href={summaryButtonLink}>
                    <button className={`${styles.curvedButtonProjects} ${ubuntu.className}`}>
                    {summaryButtonText}
                    </button>
                </Link>
            </div>
        </div>
        <div className={styles.carouselContainer}>
            <Image
                src={photos[currentIndex].src}
                alt={`Slide ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                priority={true} 
                className={styles.carouselImage}
            />
            <div className={`${styles.caption} ${ubuntu.className}`}>
                <h2 className={styles.captionHeader}>{photos[currentIndex].header}</h2>
                <p className={styles.captionText}>{photos[currentIndex].text}</p>
                <Link href={photos[currentIndex].projectUri}>
                    <button className={`${styles.curvedButton} ${ubuntu.className}`}>
                        {projectButtonText}
                    </button>
                </Link>
            </div>
            <button className={styles.prevButton} onClick={prevPhoto}>
                &#10094;
            </button>
            <button className={styles.nextButton} onClick={nextPhoto}>
                &#10095;
            </button>
        </div>
    </div>
        
  );
};

export default PhotoCarousel;
