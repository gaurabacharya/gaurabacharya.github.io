import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './AR.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import Footer from '../../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const ARProject = () => {

  const images = {
    arIcon: {src: '/images/ARIcon.png', alt: "Augmented Reality Icon"},
    appCollage: {src: '/images/arAppCollage.png', alt: "AR Application Collage with Legend"},
    tools: {src: '/images/tools.png', alt: "Software tools used"},
    team: {src: '/images/capstoneTeamPicture.png', alt: "Capstone Team Picture"},
  };

  return (
    <div>
      <Header/>
    <section className={`${styles.arPage} ${ubuntu.className}`}>
      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h1>Medical Device AR App Overview</h1>
          <p>This project involved working with a client from the medical device industry to
            develop a sophisticated user interface (UI) and software integration for a
            cutting-edge healthcare solution. The goal was to create a device that combines
            modern hardware and software technologies to improve medical procedures.
            Our team identified key needs and designed a custom solution based on these
            requirements, ensuring that it met both user and industry standards.
            The project brought together hardware, software, and innovative design to
            create a seamless interaction between different devices, such as a
            mixed-reality headset and application software.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.arIcon.src} alt={images.arIcon.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Designing Based on Client Requirements</h2>
          <p>Working closely with a medical device startup, we built this solution in collaboration
            with the client to meet their specific design and functional needs. The client had high
            expectations for the product to integrate smoothly into the workflow of healthcare
            professionals. To accommodate this, we utilized mixed-reality hardware, which included
            a headset for interacting with real-world objects and digital overlays, providing a
            user-friendly experience while enhancing procedural accuracy. 
            
            We ensured that the system supported various hardware configurations by leveraging frameworks
            like OpenXR, making the device compatible with different headset models. Additionally, we 
            designed the app to integrate seamlessly with external sensors and software, providing
            real-time feedback and interactivity.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.appCollage.src} alt={images.appCollage.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Tools and Integration</h2>
          <p> The solution was developed using a variety of tools, both hardware and software.
              The key elements of our design included:</p>
          <ul className={styles.listSection}>
            <li>Unity: For developing the augmented reality environment.</li>
            <li>OpenXR Framework: To ensure compatibility across different hardware devices.</li>
            <li>Custom Machine Learning Model: For processing inputs and delivering precise outputs
                in real-time.</li>
            <li>Google Cloud Platform: Used to run machine learning models and manage data through 
                scalable cloud services.</li>    
            <li>Sensors and Devices: Lidar sensors, infrared blasters, and a mixed-reality headset 
                formed the core of the hardware system, which was managed by scripts within the Unity
                engine.</li>
          </ul>
          <p>The interactions between these components were carefully engineered to ensure that each
            part worked together seamlessly. For instance, real-time data from the sensors was processed 
            by the machine learning model and then visualized in 3D through the augmented reality
            environment.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.tools.src} alt={images.tools.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>

      <div className={styles.textImageRow}>
        <div className={styles.textSection}>
          <h2>Impact and Lessons Learned</h2>
          <p>The project resulted in a highly functional and innovative solution that met the client&apos;s
            needs and provided significant value to the intended users. One of the key outcomes was the
            development of a user interface that was intuitive and efficient, improving workflow and
            reducing the complexity typically associated with such medical procedures.

            Through this process, our team gained valuable experience in working with cutting-edge technologies,
            including augmented reality, machine learning, and medical device integration. Additionally, we
            learned how to work closely with clients in a professional setting, adapting to their needs and
            ensuring that the final product aligned with their vision.

            This project was an exciting opportunity to combine technology and healthcare, creating a product 
            that could have a meaningful impact on the future of medical devices.
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image src={images.team.src} alt={images.team.alt} width={600} height={400} className={styles.projectImage}/>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default ARProject;