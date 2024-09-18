import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './NbaStats.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const NbaStatsProject = () => {

  const images = {
    icon: {src: '/images/NBAStatsIcon.png', alt: "NBA Stats Icon"},
    webpage: {src: '/images/nbaStats.png', alt: "NBA Stats Webapp Page"},
    visualization: {src: '/images/top5-Points-2019-2020.png', alt: "Top 5 Players in Points in the 2019-2020 NBA Season"},
  };

  return (
    <div>
    <Header/>
  <section className={`${styles.nbaStatsPage} ${ubuntu.className}`}>
    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <header className={styles.header}>
          <h1>NBA Statistics Visualizer</h1>
          <div className={styles.iconLinks}>
            <a href="https://github.com/gaurabacharya/HTN-NBA-Stat-Visualizer" target="_blank" rel="noopener noreferrer">
              <FaGithub  size={40} />
            </a>
            <a href="https://github.com/gaurabacharya/NBA-Stats-Webapp" target="_blank" rel="noopener noreferrer">
              <FaGithub  size={40} />
            </a>
            <a href="https://gacharya.shinyapps.io/R-shiny-app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt  size={40} />
            </a>
          </div>
        </header>
        <p>
        The NBA Statistic Visualizer and Web App is a tool designed to help users easily 
        explore and analyze NBA player statistics. By scraping data from the Basketball 
        Reference website, this project compiles and processes statistics from three NBA seasons. 
        The web app allows users to filter and view data by season and stat category, making it 
        easy to find the top five players in categories like points, rebounds, assists, and more. 
        Whether you&apos;re a basketball fan, an analyst, or someone looking to explore NBA data, 
        this tool provides a simple and effective way to interact with and visualize key 
        statistics.
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
        The project was implemented using a combination of Python for data scraping and 
        processing, and R with Shiny for building the web application. The process was 
        broken down into several key steps:
        </p>
        <ul className={styles.listSection}>
          <li>
            Web Scraping: Using BeautifulSoup, I scraped NBA statistics from Basketball 
            Reference for three seasons, compiling data on player performance in various stat 
            categories.
          </li>
          <li>
          Data Packaging: The scraped data was cleaned and stored as CSV files. These files were 
          then uploaded to Dropbase, which provided an API to convert the CSVs into JSON objects. 
          The data was made available in a structured format, ready to be used by the web 
          application.
          </li>
          <li>
          Data Analysis: I wrote Python classes and methods to identify the top five players 
          in each stat category for all three seasons. This data was packaged into visualizations 
          and tables, making it easy to present the insights.
          </li>
          <li>
          Web App: Using R Shiny, I developed an interactive web app with a responsive 
          navigation bar and drop-down menus. The app allows users to select a season and a stat 
          category, then view a table displaying the players stats for that season. The 
          table dynamically updates based on the user&apos;s selection, providing a smooth and 
          engaging user experience.
          </li>
        </ul>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.visualization.src} alt={images.visualization.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>What I learned</h2>
        <p> 
        This project taught me a great deal about data scraping, data analysis, and web 
        development. Through building this tool, I gained experience in using BeautifulSoup 
        for web scraping and Dropbase for data storage and API integration. Managing large 
        datasets and converting them into structured, usable formats was an important lesson 
        in data processing and cleaning.
        </p>
        <p>
        Additionally, working with R Shiny for web app development allowed me to learn how to 
        create interactive and responsive user interfaces. I also improved my understanding of 
        how to use APIs to handle data in real-time, ensuring that the web app could dynamically 
        update based on user input. The project enhanced my skills in Python, R, and working with 
        JSON objects, while also teaching me how to build a tool that can be useful for 
        real-world data exploration.
        </p>
        <p>
        Overall, this project was a great way to combine my interest in basketball with my 
        passion for data analysis and web development, and it has provided me with invaluable 
        experience in building data-driven applications.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.webpage.src} alt={images.webpage.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  );
};

export default NbaStatsProject;