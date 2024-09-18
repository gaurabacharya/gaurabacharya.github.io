import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './Posture.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const PostureProject = () => {

  const images = {
    icon: {src: '/images/PostureIcon.png', alt: "Posture Position Corrector Icon"},
    bestLogo: {src: '/images/best.png', alt: "UBC BEST Logo"},
    emgData: {src: '/images/emgFiltering.png', alt: "Filtering of EMG Data"},
    tracker: {src: '/images/sportsmedTracker.png', alt: "Capstone Team Picture"},
  };

  return (
    <div>
      <Header/>
    <section className={`${styles.posturePage} ${ubuntu.className}`}>
      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
        <header className={styles.header}>
            <h1>Posture Position App Overview</h1>
            <div className={styles.iconLinks}>
              <a href="https://docs.google.com/document/d/1wqURLYpwPPxl070JBkCJEHmEAi8TemNHIeQxOn5lNls/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={40} />
              </a>
            </div>
        </header>
        <p>
          The Posture Position Corrector App was developed as part of a multidisciplinary 
          project at UBC, aimed at creating context-appropriate solutions for posture 
          correction through the use of innovative technology. Our team of students from 
          various faculties, including Engineering, Medicine, and Business, collaborated 
          to design a solution that supports physiotherapy through real-time posture tracking.
          By connecting the app to a hardware accelerometer and gyroscope, we enabled users to
          track their posture and receive notifications when a deviation is detected. This 
          project reflects our vision to integrate relevant technology in healthcare, fostering
          technical and professional growth among students while promoting learning in the
          biomedical field.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.icon.src} alt={images.icon.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Research and Development</h2>
          <p>
          The R&D phase of the Posture Position Corrector App involved thorough research into
          posture correction and physiotherapy practices. The focus was on how real-time data
          could be collected and utilized to improve users&apos; posture. Using data from EMG sensors,
          we identified key muscle groups that play a critical role in maintaining posture, such
          as the rectus abdominis, external obliques, and erector spinae muscles. This information
          guided our algorithm development for posture monitoring. We also conducted market
          research to evaluate existing solutions and identify gaps that our app could address,
          ensuring we built a product that was both innovative and valuable to users.

          Our work was supported by the creation of a detailed exercise test procedure that
          provided us with baseline data on muscle activation and posture positions. This 
          baseline data was essential in determining the posture thresholds used by the app to
          notify users when they deviated from optimal posture. This process also involved
          testing electrode placements and ensuring accurate signal processing through a 
          combination of hardware and software innovations.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.emgData.src} alt={images.emgData.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Implementation</h2>
          <p> 
          We implemented the Posture Position Corrector App using a combination of hardware
          and software tools. The app was developed in React Native, allowing for cross-platform 
          functionality, and was connected to a gyroscope API for real-time posture tracking.
          The posture correction algorithms we created were designed to detect changes in the
          user&apos;s posture by 5° and send notifications to alert the user.

          For data processing, we incorporated a machine learning model trained on posture data.
          This model was optimized to handle real-time tracking and notifications. The gyroscope
          provided input data, which was processed by the app to determine whether the user&apos;s 
          posture was within the acceptable range. Additionally, the app was personalized for
          each user, using individual calibration data to ensure that the feedback was tailored
          to their specific needs and posture habits.
          </p>
        </div>
        <div className={styles.imageSection}>
        <Image src={images.tracker.src} alt={images.tracker.alt} width={800} height={600} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>What I Learned</h2>
          <p>
          Throughout this project, we gained hands-on experience in both hardware and software
          integration, learning how to combine gyroscopic data with machine learning to create
          a real-time posture correction tool. We honed our skills in React Native, developed
          machine learning models for posture detection, and explored the intricacies of 
          wearable technology. One of the major takeaways was understanding how to balance
          the needs of the user with the technical constraints of the system, ensuring that the
          app was user-friendly while maintaining a high level of accuracy in posture tracking.

          Additionally, working in a multidisciplinary team allowed us to improve our 
          collaboration skills, combining expertise from engineering, kinesiology, and
          business to create a product that met both technical and market requirements.
          We also learned the importance of iterative testing and user feedback, which
          played a key role in refining the app&apos;s functionality and ensuring its effectiveness
          in supporting physiotherapy.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.bestLogo.src} alt={images.bestLogo.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default PostureProject;