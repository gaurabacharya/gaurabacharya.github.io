"use client";
import React, { useState, useEffect } from 'react';
import styles from './DynamicBackgroundSection.module.css';
import ImageAndText from './ImageAndText';

const gaurabPortrait =  {
    imageSrc: '/images/GaurabPortrait.png',
    header: "Hi I'm Gaurab",
    alt: "Gaurab's Portrait Image",
    text: "I'm a senior undergraduate student studying Biomedical Engineering " + 
          "specializing in Systems and Signals at UBC. I'm passionate about " +
          "building software that has an impact on people, with a focus on healthcare. " +
          "In my free time I love to give back, through sport, by coaching local teams " +
          "in my community, and developing new software projects. "
};


const DynamicBackgroundSection: React.FC = () => {
  const [color, setColor] = useState('linear-gradient(45deg, #1e3c72, #2a5298)');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomGradient());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRandomGradient = () => {
    const colors = [
        'linear-gradient(45deg, #1e3c72, #2a5298)',  // Dark Blue to Medium Blue
        'linear-gradient(45deg, #0f2027, #203a43, #2c5364)', // Deep Navy to Dark Teal
        'linear-gradient(45deg, #141e30, #243b55)',  // Very Dark Blue to Steel Blue
        'linear-gradient(45deg, #000428, #004e92)',  // Midnight Blue to Deep Sky Blue
        'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',  // Dark Purple-Blue to Navy Blue
        'linear-gradient(45deg, #1a2980, #26d0ce)',  // Dark Indigo Blue to Light Cyan-Blue
        'linear-gradient(45deg, #2b5876, #4e4376)',  // Navy Blue to Purple-Tinted Blue
      ];
      
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className={styles.section} style={{ background: color }}>
      <ImageAndText 
        imageSrc={gaurabPortrait.imageSrc}
        header={gaurabPortrait.header}
        alt={gaurabPortrait.alt}
        text={gaurabPortrait.text}
        text2=''
       />
    </section>

  );
};

export default DynamicBackgroundSection;
