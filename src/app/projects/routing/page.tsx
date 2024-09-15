import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './Routing.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub} from 'react-icons/fa';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const RoutingProject = () => {

  const images = {
    icon: {src: '/images/routingIcon.png', alt: "Routing Icon"},
    distanceVector: {src: '/images/distanceVector.png', alt: "Distance Vector Routing Diagram"},
    routing: {src: '/images/dynamicRouting.png', alt: "Routing Path from 2 Computers and Different Routes"},
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
            <a href="https://github.com/gaurabacharya/routing-protocols" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </div>
        </header>
        <p>
        The Distance Vector Routing and Link State Routing Protocol project was designed to 
        implement two essential routing algorithms used in networking to determine the shortest
        path for data to travel across a network. Both algorithms help in updating and maintaining
        routing tables, ensuring efficient communication between nodes in a network topology.
        The project offers practical insight into how modern routers calculate paths and update
        routing tables as network conditions change. By building this protocol, we aimed to
        simulate how routing decisions are made in real-time while managing changes in network
        topologies.
        </p>
        <p>
        The distance vector routing protocol utilizes the Bellman-Ford algorithm to update
        routing tables based on the distance and direction to neighboring nodes, while the
        link state routing protocol ensures each node maintains a complete view of the network&apos;s
        topology. Both approaches were tested under different network conditions to evaluate
        their efficiency and reliability.
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
        The project was built using Python, with a clear structure for both the distance vector
        routing protocol and the link state routing protocol. Each protocol is run via bash
        scripts for ease of use:
        </p>
        <ul>
            <li>Distance Vector Routing: Run using ./dvr.sh [outputFile].</li>
            <li>Link State Routing: Run using ./lsr.sh [outputFile].</li>
        </ul>
        <p>For both protocols, each node in the network was represented by a custom structure:</p>
        <ul>
            <li>In the distance vector routing algorithm, each node maintained a routing table
                with information about its neighbors, including functions to add/remove neighbors
                and update its routing table.
            </li>
            <li>In the link state routing algorithm, nodes maintained information about their 
                neighbors and could exchange topology updates to calculate the shortest paths
                across the network.
            </li>
        </ul>
        <p>
            The distance vector routing algorithm operates using the Bellman-Ford algorithm to
            calculate the shortest paths from one node to all others. Key functions include:
        </p>
        <ul>
            <li>update_routing_table: Updates a node&apos;s routing table based on received distance vectors.</li>
            <li>run_bellman_ford: Loops through nodes to calculate shortest paths using the Bellman-Ford algorithm.</li>
            <li>distanceVector_routing: This controller function manages the full execution of the 
                distance vector algorithm, including reading network topologies, messages, and any
                changes to the topology.
            </li>
        </ul>
        <p>In link state routing, each node maintains a full map of the network&apos;s topology,
           updating its routing table whenever changes are detected. Key functions include:
        </p>
        <ul>
            <li>link_state_routing: Executes the link state routing algorithm, managing inputs
                from topology, message, and change files.
            </li>
            <li>update_nodes: Updates the link state information for each node based on received changes.</li>
            <li>get_hops: Determines the sequence of nodes that data packets must traverse to reach their destination.</li>
        </ul>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.distanceVector.src} alt={images.distanceVector.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>What I Learned</h2>
        <p> 
        This project provided valuable experience in the core principles of networking and
        routing protocols. I gained a deeper understanding of how data packets travel through 
        a network and how routers dynamically adjust their paths based on changing conditions.
        By implementing both the Distance Vector and Link State Routing protocols, I learned how 
        different algorithms solve the same problem in distinct ways: while distance vector
        routing uses neighbor-to-neighbor updates, link state routing requires nodes to maintain
        a global view of the network. Implementing the Bellman-Ford algorithm to manage distance
        vectors and using link state information to calculate next hops provided hands-on
        experience with routing logic.
        </p>
        <p>
        Additionally, this project emphasized the importance of scalability and efficiency in
        network design. Balancing the complexity of the algorithms with real-time performance
        required careful thought, especially when considering factors like topology changes
        and network congestion. Through testing and evaluation under various conditions,
        I also learned how to optimize the protocols to handle different types of network traffic,
        packet loss, and bandwidth constraints.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.routing.src} alt={images.routing.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  </div>
  );
};

export default RoutingProject;