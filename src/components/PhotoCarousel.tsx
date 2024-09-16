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

  const photos = [
    { src: '/images/ARIcon.png', width: 1920, height: 1080,
      header: "Medical Device Augmented Reality App", 
      text: "Developed an augmented reality app using Unity to project " + 
       "virtual customized objects for a medical device startup, " + 
       "using Apple ARKit's image tracking and projection",
      projectUri: "/projects/ar",
    },
    { src: '/images/SneakerViewIcon.png', width: 1920, height: 1080,
      header: "Sneaker Recognition App",
      text: "Built an iOS application, using Swift, and trained an " +
       "image classification model to allow users " + 
       "to upload photos to recognize the model of Jordan sneakers.",
       projectUri: "/projects/snkrview",
     },
    { src: '/images/PostureIcon.png', width: 1920, height: 1080,
      header: "Posture Position Corrector",
      text: "Designed an app connected to an accelerometer and gyroscope " +
       "to track posture data, supporting posture correction physiotherapy.",
       projectUri: "/projects/posture"
    },
    {src: '/images/tcpIcon.png', width: 1920, height: 1080,
      header: "Reliable Data Transfer Protocol over UDP",
      text: "Developed algorithms in c to send and receive data, using c, implementing congestion control " +
            "and flow control mechanisms that are used in TCP, but using UDP sockets.",
      projectUri: "/projects/tcp",
     },
     {src: '/images/routingIcon.png', width: 1920, height: 1080,
      header: "Distance Vector Routing and Link State Routing Protocol",
      text: "Implemented distance vector routing and link state routing algorithms, in python, to " +
            "update routing tables based on a network topology, and find the shortest path.",
      projectUri: '/projects/routing'
     },
     {src: '/images/portableMicroscope.png', width: 1920, height: 1080,
      header: "Portable Microscope for Sickle Cell Detection",
      text: "Designed and created a portable microscope, in a UBC Biomedical Engineering " +
          "design course, for rural villages to detect sickle cell disease.",
      projectUri: "/projects/microscope"
     },
     {src: '/images/vaccineContainer.png', width: 1920, height: 1080,
      header: "Covid-19 Vaccine Container for Transportation",
      text: "Designed a solution for a container that is able to transport covid-19 vaccine " +
            "vials safely and securely, maintaining temperature and optimizing shipment space.",
      projectUri: "/projects/vaccine",
     },
     {src: '/images/gameIcon.png', width: 1920, height: 1080,
      header: "Flappy Beard Arcade Game",
      text: "Created an arcade game similar to Flappy Bird using the NBA player, James Harden, " +
            "as the main character who has an iconic beard to avoid the shaving razors, to learn " +
            "object oriented programming principles and to create a fun game.",
      projectUri: "/projects/flappybeard",
     },
     { src: '/images/NBAStatsIcon.png', width: 1920, height: 1080,
      header: "NBA Statistic Data Analysis",
      text: "Created visualizations and analyzed NBA statistics to find " + 
       "the top five players of each stat category using Python and created " + 
       "a webapp to access the stats using R and R Shiny.",
       projectUri: "/projects/nbastats"
     },
  ];

const PhotoCarousel = () => {
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
    <div className={styles.carouselSection}>
        <div className={`${styles.projectTextContainer} ${ubuntu.className}`}>
            <h2>Welcome to My Project Collection!</h2>
            <p>
                This section showcases a curated collection of my personal projects,
                which I’ve developed through various experiences, including hackathons,
                personal endeavors, and projects at UBC. Each project reflects my passion
                for creativity, problem-solving, and learning new tools. Feel free 
                to explore the projects, and I hope they inspire or spark your interest
                 as much as they did for me while creating them!
            </p>
            <div style={{paddingTop: "20px"}}>
                <Link href={"/projects"}>
                    <button className={`${styles.curvedButtonProjects} ${ubuntu.className}`}>
                    See Projects
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
                priority={true} // Ensures the image is optimized for performance
                className={styles.carouselImage}
            />
            <div className={`${styles.caption} ${ubuntu.className}`}>
                <h2 className={styles.captionHeader}>{photos[currentIndex].header}</h2>
                <p className={styles.captionText}>{photos[currentIndex].text}</p>
                <Link href={photos[currentIndex].projectUri}>
                    <button className={`${styles.curvedButton} ${ubuntu.className}`}>
                        See Project
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
