import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './VaccineContainer.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const VaccineContainerProject = () => {

  const images = {
    icon: {src: '/images/vaccineContainer.png', alt: "Vaccine Container Icon"},
    diagram: {src: '/images/containerDiagram.png', alt: "Vaccine Container Diagram"},
    drawing: {src: '/images/vaccineContainerDrawing.png', alt: "Vaccine Container Drawing Diagram"},
    solidworks: {src: '/images/vaccineContainerSolidworks.png', alt: "Vaccine Container Solidworks Assembly"}
  };

  return (
    <div>
    <Header/>
  <section className={`${styles.vaccineContainerPage} ${ubuntu.className}`}>
    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <header className={styles.header}>
          <h1>Covid-19 Vaccine Container Overview</h1>
          <div className={styles.iconLinks}>
            <a href="https://drive.google.com/drive/folders/1RCCPHMlABJgFEeQnmxyYh_EGZDQgqp2l?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt  size={40} />
            </a>
          </div>
        </header>
        <p>
        The COVID-19 Vaccine Thermal Shipping Container Project was created to address the 
        critical need for safe and reliable transportation of vaccines in extreme conditions. 
        During the pandemic, ensuring the vaccines remain within a stable temperature range 
        during transportation became crucial. Our goal was to develop a low-cost, durable, 
        and effective thermal container capable of keeping vaccines at a temperature 
        between -60°C and -80°C. The container was designed to store vaccines for up to 
        35 days without extreme freezing, using dry ice and integrated temperature monitoring 
        systems to maintain the integrity of the doses. This container serves to improve global 
        vaccine distribution, especially in low-resource settings where maintaining cold chain 
        requirements is challenging.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.icon.src} alt={images.icon.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Engineering Design Process</h2>
        <p>
        The design process began with identifying the specific needs for storing and transporting
        COVID-19 vaccines. Working closely with our client, we defined the essential requirements: 
        maintaining a stable internal temperature, integrating a GPS tracker, and ensuring 
        minimal temperature fluctuations when the container is opened. These insights guided 
        our team through the concept generation phase, where we evaluated multiple designs for 
        thermal stability, usability, and ease of transportation.
        </p>
        <p>
        We designed the container to be lightweight and compact, ensuring it met the dimensional 
        requirements of 400mm x 400mm x 560mm while maintaining its thermal properties. 
        Dry ice refilling was a significant focus, allowing the container to retain the 
        required temperatures for extended periods. Our design also incorporated an 
        Arduino-based sensor system for real-time temperature monitoring and data logging. 
        The container could alert users if the temperature exceeded critical thresholds, 
        ensuring vaccines remained within their optimal range even in fluctuating environments. 
        Collaboration with stakeholders, including healthcare workers and vaccine distribution 
        professionals, played a vital role in refining the design to ensure practicality and 
        ease of use.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.drawing.src} alt={images.drawing.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Tools and Implementation</h2>
        <p> 
        The implementation of the thermal container focused on both hardware and software 
        components. The outer box was made from carbon fiber for its insulation properties 
        and durability, while the inner container and drawers were constructed using 
        aluminum alloy for optimal thermal conductivity. The design featured multiple 
        compartments for dry ice, ensuring the cooling effect was evenly distributed 
        throughout the container. A specialized Arduino system monitored internal temperatures, 
        logging data and alerting users to potential issues. This system was powered by 
        rechargeable batteries, capable of lasting up to 35 days, with the option for dry 
        ice to be replenished during long shipments.
        </p>
        <p>
        Our software design included a user interface that displayed temperature data, 
        providing real-time feedback on the container’s status. The GPS tracker was 
        integrated to monitor the container’s location during transit, ensuring vaccines 
        were kept within safe conditions until they reached their destination. The final 
        prototype was rigorously tested under various conditions to ensure it could withstand 
        real-world challenges like delayed shipments and extended transport periods.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.diagram.src} alt={images.diagram.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Impact and What We Learned</h2>
        <p> 
        This project had a significant impact on the safe distribution of vaccines during 
        the COVID-19 pandemic. By creating a thermal container that maintained stable 
        conditions for over 35 days, we contributed to addressing vaccine spoilage and 
        distribution challenges in low-resource areas. Our design reduced the need for 
        constant monitoring and intervention, giving healthcare providers more reliable 
        tools to manage vaccine storage.
        </p>
        <p>
        Through this project, we learned the importance of interdisciplinary collaboration 
        in solving global challenges. From designing thermal systems to integrating digital 
        solutions like GPS and temperature monitoring, this project enhanced our skills in 
        engineering design, prototyping, and client-focused development. We also gained 
        insights into the complexities of maintaining cold chain logistics during vaccine 
        distribution, contributing to broader efforts to ensure vaccines reach even the most 
        remote locations safely.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.solidworks.src} alt={images.solidworks.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  </div>
  );
};

export default VaccineContainerProject;