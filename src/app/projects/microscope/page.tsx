import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './Microscope.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const MicroscopeProject = () => {

  const images = {
    icon: {src: '/images/portableMicroscope.png', alt: "Portable Microscope Icon"},
    timeline: {src: '/images/microscopeTimeline.png', alt: "Microscope Project Timeline Diagram"},
    drawing: {src: '/images/microscopeDrawing.png', alt: "Microscope Drawing Diagram"},
    solidworks: {src: '/images/microscopeSolidworks.png', alt: "Microscope Solidworks Assembly"}
  };

  return (
    <div>
    <Header/>
  <section className={`${styles.microscopePage} ${ubuntu.className}`}>
    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <header className={styles.header}>
          <h1>Portable Microscope Overview</h1>
          <div className={styles.iconLinks}>
            <a href="https://drive.google.com/drive/folders/1yIii4rAHC-gkH9jlfYuOjSyKMKUHGYRx?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt  size={40} />
            </a>
          </div>
        </header>
        <p>
        The Portable Microscope Project aimed to develop a low-cost, durable, and portable
        microscope to address medical challenges in rural and resource-limited areas. 
        The project specifically focused on the detection of diseases such as sickle cell 
        anemia in areas like Dang Gadhawa, Nepal, where access to medical equipment is limited. 
        Our client, Pranav Shrestha, sought a solution that could be easily transported and used
        by minimally trained healthcare workers. The microscope needed to be affordable, easy to
        maintain, and capable of delivering clear, accurate diagnostic results, contributing
        to better healthcare outcomes for disadvantaged populations.
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
        We followed a structured engineering design process to meet the client’s needs,
        ensuring that our solution was both functional and adaptable to the challenges 
        of rural healthcare. Initially, we consulted the client and conducted a needs 
        assessment, which highlighted the necessity for a low-cost, durable, and portable 
        device. We identified key stakeholders, including technicians, patients, and healthcare
        workers, to ensure that our design was user-friendly and met the needs of all parties
        involved.
        </p>
        <p>
        We generated multiple concepts, each focusing on aspects such as portability,
        ease of use, and durability. After evaluating the alternatives, we selected a design
        that incorporated commonly available materials for the microscope’s structure, along
        with open-source software for image analysis. Throughout the design process, we
        conducted continuous testing to ensure the device could withstand transportation 
        and operate effectively in low-resource environments. Feedback from stakeholders
        was essential in refining our design to be both intuitive and efficient, addressing
        concerns like power limitations and the need for simple maintenance procedures.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.timeline.src} alt={images.timeline.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Tools and Implementation</h2>
        <p> 
        For the implementation, we utilized a combination of hardware and software to create
        the microscope. The device was designed to be built from inexpensive, easily accessible
        components, such as 3D-printed parts, which reduced manufacturing costs and facilitated
        repairs. The microscope included a basic light source, standard objective lenses, and
        a stage compatible with commonly used slides, ensuring that technicians in rural areas
        could use the device without needing specialized training.
        </p>
        <p>
        On the software side, we integrated a machine learning algorithm that helped automate
        the identification of blood abnormalities, including sickle cell traits. The software 
        was designed to run on minimal hardware, using open-source platforms to keep the costs 
        low while allowing for future improvements. The project also focused on making the 
        microscope easy to maintain, ensuring that healthcare workers could clean and repair 
        it with minimal effort. The combination of durable materials, open-source software, and 
        clear design made the microscope a robust tool for rural medical practices.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.drawing.src} alt={images.drawing.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Impact and What We Learned</h2>
        <p> 
        This project had a significant impact by addressing the need for affordable medical 
        technology in low-resource settings. By creating a microscope that could be easily 
        produced and maintained, we helped improve access to critical diagnostic tools in 
        rural communities, where healthcare is often limited. The open-source nature of the 
        project also allowed for adaptability, meaning that the microscope could be used 
        for a variety of diagnostic purposes beyond sickle cell detection.
        </p>
        <p>
        Through this project, we learned valuable lessons in collaborative design and 
        multidisciplinary engineering. Working with clients and stakeholders gave us insight 
        into the challenges of creating medical devices for diverse environments. Additionally, 
        we gained experience in balancing technical requirements with practical constraints, 
        such as cost, usability, and durability. The success of the project demonstrated the 
        importance of integrating user feedback into the design process and provided us with 
        a deep understanding of how engineering can be used to address global healthcare 
        challenges.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.solidworks.src} alt={images.solidworks.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  );
};

export default MicroscopeProject;