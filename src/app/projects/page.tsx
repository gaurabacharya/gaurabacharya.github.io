import React from 'react';
import Header from '../../components/header';
import ProjectItem from '../../components/ProjectItem';
import styles from './ProjectPage.module.css';
import { Ubuntu_Mono } from 'next/font/google';
import Footer from '../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
  });

const ProjectsPage = () => {
  const projects = [
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
      text: "Developed algorithms to send and receive data, using c, implementing congestion control " +
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

  return (
    <div className={`${styles.pageSection} ${ubuntu.className}`}>
      <Header/>
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectItem 
            key={index}
            iconSrc={project.src}
            alt={project.header}
            projectTitle={project.header}
            caption={project.text}
            projectUri={project.projectUri}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectsPage;