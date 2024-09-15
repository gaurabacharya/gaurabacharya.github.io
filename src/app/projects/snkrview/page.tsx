import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './SNKRView.module.css';
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const SnkrViewProject = () => {

  const images = {
    icon: {src: '/images/SNKRview.png', alt: "SnkrView Project Icon"},
    tools: {src: '/images/snkrUpload.png', alt: "Sneaker upload screen"},
    winner: {src: '/images/snkrWinner.png', alt: "Winning Team Message"},
    clResult: {src: '/images/commandLineResult.png', alt: "Command Line Result of Prediction"},
  };

  return (
    <div>
      <Header/>
    <section className={`${styles.snkrviewPage} ${ubuntu.className}`}>
      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <header className={styles.header}>
            <h1>SNKRView App Overview</h1>
            <div className={styles.iconLinks}>
              <a href="https://github.com/gaurabacharya/SnkrView" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </a>
              <a href="https://devpost.com/software/snkrview" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={40} />
              </a>
              <a href="https://tinyverse.substack.com/i/41667171/competition" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={40} />
              </a>
            </div>
          </header>
          <p>Sneakers are more than just footwear; they tell a story about who we are 
            and what we value. Whether it’s a cultural statement or simply a preferred
            style, our choice of sneakers reflects our identity. Inspired by this idea,
            I built SNKRView with 2 of my friends for a hackathon, which is an app designed
            to help sneaker enthusiasts better exchange information about their shoes. 
            The app allows users to take or upload photos of their sneakers, and through 
            machine learning running on the device, it identifies
            the model on device. This project won the sponsor prize from HOT-G API building 
            a project from end to end from training our own model and creating an app for the ML model to be 
            run on device in a tiny ML container. 
          </p>
        </div>
        <div className={styles.imageSection}>
        <Image src={images.winner.src} alt={images.winner.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Implementation</h2>
          <p>
          The development of SNKRView was broken into multiple phases. We began by scraping Bing
          for images of Jordans 1-12 and compiling these images into a dataset. Using TensorFlow 
          Lite, we trained a pre-processed model on this dataset, which then became the core of a 
          Rune pipeline that processes images and outputs sneaker model predictions.
          The mobile app itself was designed using Swift in XCode for iOS, with the machine learning
          pipeline integrated through Flutter. The deployment involved combining the encoded Rune
          pipeline with the iOS application, ensuring seamless interaction between the model and
          the app interface.
          </p>
        </div>
        <div className={styles.imageSection}>
        <Image src={images.tools.src} alt={images.tools.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Challenges We Faced</h2>
          <p> 
            Building SNKRView came with its share of challenges. The first was creating a
            dataset that was large enough to ensure model accuracy, but small enough to train
            efficiently within a limited time frame. Another challenge was working with the Rune
            infrastructure, which we were initially unfamiliar with, leading to a learning
            curve as we built out the pipeline. Additionally, deploying the Rune pipeline onto
            Flutter and integrating it with the iOS app presented technical hurdles, as both the
            tools and the infrastructure were new to us. And of course, the lack of sleep during
            this intensive development process also added to the challenge.
          </p>
        </div>
        <div className={styles.imageSection}>
        <Image src={images.icon.src} alt={images.icon.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>What I Learned</h2>
          <p>
          Through this project, I gained hands-on experience with several new technologies
          and development processes. I learned how to scrape and compile datasets, train models
          using TensorFlow Lite, and integrate a machine learning pipeline into a mobile app.
          Working with Rune, Swift, and XCode was an eye-opener, as it gave me insight into 
          mobile development workflows and transfer learning. I also honed my skills with
          Flutter, allowing us to bridge the gap between machine learning and app development.
          Overall, SNKRView has not only helped us improve our technical abilities but also 
          taught me valuable lessons in project management and problem-solving.
          </p>
        </div>
        <div className={styles.videoSection}>
          <iframe width="600" height="350" 
            className={styles.video}
            src="https://www.youtube.com/embed/1pvxpE0J9TI?si=XJ6BZGcZh8FEjIFd"
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SnkrViewProject;