import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './TCPProject.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub} from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const TCPProject = () => {

  const images = {
    icon: {src: '/images/tcpIcon.png', alt: "TCP Icon"},
    handshake: {src: '/images/threeWayHandshake.jpg', alt: "Three Way Handshake Diagram"},
    congestion: {src: '/images/tcpCongestion.png', alt: "TCP Congestion Control Protocol"},
  };

  return (
    <div>
    <Header/>
  <section className={`${styles.tcpPage} ${ubuntu.className}`}>
    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <header className={styles.header}>
          <h1>Overview</h1>
          <div className={styles.iconLinks}>
            <a href="https://github.com/gaurabacharya/Reliable-Data-Transfer-Protocol" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </div>
        </header>
        <p>
            This project focused on developing a reliable data transfer protocol over UDP
            (User Datagram Protocol), an inherently unreliable communication protocol.
            Unlike TCP, UDP lacks built-in mechanisms for ensuring packet delivery, ordering,
            or error checking, making it faster but less reliable. To overcome this, the
            protocol we designed included congestion control and flow control mechanisms
            to ensure efficient and accurate data transmission even in variable network 
            conditions. The solution enables the transmission of files with features such
            as packet acknowledgment, retransmission of lost packets, and congestion control,
            creating a reliable data flow over an unreliable channel.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.icon.src} alt={images.icon.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>Implementation</h2>
        <p>
        The protocol was implemented using a combination of sender and receiver systems,
        both developed in C. The sender (rsend) was responsible for splitting files into chunks
        and sending them through UDP sockets. A sliding window mechanism was implemented to
        control the number of unacknowledged packets, and a Selective Repeat ARQ 
        (Automatic Repeat reQuest) algorithm was used to handle lost packets through selective 
        retransmissions. Additionally, congestion control mechanisms, inspired by TCP Tahoe and
        TCP Reno, were used to adjust the sender&apos;s transmission rate, preventing network
        congestion.
        </p>
        <p>
        The receiver (rrecv) handled incoming packets, using its own sliding window to buffer
        the packets and send acknowledgments back to the sender. This allowed for effective 
        flow control, ensuring that the receiver could signal the sender to slow down or
        speed up based on the current network conditions. Throughout the process, checksums 
        were used to verify the integrity of each packet.
        </p>
        <p>
        The testing phase included evaluating the protocol under various network conditions,
        including dropped packets and varying bandwidth. This ensured the protocol adhered to
        the specified expectations, including fairness, throughput, and proper flow control.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.handshake.src} alt={images.handshake.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>What I Learned</h2>
        <p> 
        Through this project, I gained a deep understanding of network protocols, 
        particularly how to implement reliable communication over an unreliable transport 
        layer like UDP. I learned how to design and implement a sliding window protocol 
        and Selective Repeat ARQ, both of which are critical for ensuring efficient data
        transmission. Additionally, I explored congestion control algorithms like TCP Tahoe
        and TCP Reno, gaining insight into how they dynamically adjust transmission rates
        based on network congestion.
        </p>
        <p>
        The project also provided hands-on experience with UDP sockets and low-level communication
        protocols, deepening my understanding of how data flows between a sender and receiver 
        over a network. I learned the importance of carefully balancing flow control and
        congestion control to prevent data loss or overload, all while maintaining optimal
        data transfer speeds.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.congestion.src} alt={images.congestion.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  </div>
  );
};

export default TCPProject;