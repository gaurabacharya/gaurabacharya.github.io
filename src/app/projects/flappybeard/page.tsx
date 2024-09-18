import React from 'react';
import Header from '../../../components/header';
import Image from 'next/image';
import styles from './FlappyBeard.module.css'; 
import { Ubuntu_Mono } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import Footer from '../../../components/footer';

const ubuntu = Ubuntu_Mono({
    weight: ['400', '400'],  
    subsets: ['latin']
});

const FlappyBeardProject = () => {

  const images = {
    icon: {src: '/images/gameIcon.png', alt: "Video Game Icon"},
    opening: {src: '/images/flappyBeardOpeningScreen.png', alt: "Flappy Beard Opening Screen"},
    gameOver: {src: '/images/flappyBeardGameOver.png', alt: "Flappy Beard Game Over Screen"},
  };

  return (
    <div>
    <Header/>
  <section className={`${styles.flappyBeardPage} ${ubuntu.className}`}>
    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <header className={styles.header}>
          <h1>Flappy Beard Video Game Overview</h1>
          <div className={styles.iconLinks}>
            <a href="https://github.com/gaurabacharya/Flappy-Beard" target="_blank" rel="noopener noreferrer">
              <FaGithub  size={40} />
            </a>
          </div>
        </header>
        <p>
        FlappyBeard is a fun and creative remix of the popular arcade game Flappy Bird, 
        developed using Python and the Pygame library. Instead of a bird, players control a 
        bearded James Harden as he navigates through a series of dangerous razors. The objective 
        of the game is simple: avoid the razors to keep James Harden’s beard intact. If 
        James Harden collides with a razor, the game ends, and a comical graphic of a 
        clean-shaven James Harden appears. The player’s score is displayed, and they can 
        press space to play again and try for a higher score. This project combines humor 
        with classic arcade mechanics, making for a fun and engaging experience.
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
        The FlappyBeard game was implemented in Python 3 using the Pygame library, 
        version 2.0.0.dev6. The game is controlled primarily by the keyboard, where pressing 
        the up arrow allows James Harden to jump and avoid obstacles. The game ends when Harden 
        collides with a razor, the floor, or flies too high above the screen. Upon collision, 
        the game transitions to a game over screen, where players can view their final 
        score and restart the game by pressing the space key.
        </p>
        <p>
        To start the game, users need to run the BeardRun.py file, which opens up a Pygame window. 
        The game records the high score for the current session, but the score resets when the 
        game is closed. The simplicity of the gameplay mechanics makes it easy to learn, while 
        the humorous graphics and animations keep players entertained.
        </p>
        <p>Key Features: </p>
        <ul className={styles.listSection}>
            <li>Collision detection: The game ends when James Harden collides with an obstacle or the screen boundaries.</li>
            <li>Restart functionality: Players can restart the game by pressing the space bar after each game over.</li>
            <li>Session-based high score: High scores are tracked for the current session, but they are not saved once the game window is closed.</li>
        </ul>
        <p>
        For those looking to experiment with or modify the game, it requires Python 3 and the 
        Pygame library. The game code is structured in an object-oriented programming (OOP) 
        style, which is great for developers interested in learning the basics of OOP and game 
        development in Python.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.opening.src} alt={images.opening.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>

    <div className={styles.textImageRow}>
      <div className={styles.textSection}>
        <h2>What I learned</h2>
        <p> 
        Through this project, I gained valuable experience in object-oriented programming (OOP), 
        particularly in Python. I learned how to structure a game using classes and functions, 
        making it easier to manage different components like player movement, obstacle generation, 
        and collision detection. This project also helped me understand the fundamentals of game 
        loops, event handling, and collision detection using the Pygame library.
        </p>
        <p>
        Additionally, working on FlappyBeard taught me how to manage game state transitions, 
        such as switching from the gameplay screen to the game over screen, and how to implement 
        a basic high score tracking system. While the current version of the game resets the high 
        score after the game is closed, this leaves room for future improvements, such as saving 
        high scores to a file for more persistent tracking. Overall, this project was an exciting 
        way to combine my interests in game development with the basics of OOP, and it helped me 
        further develop my Python skills.
        </p>
      </div>
      <div className={styles.imageSection}>
      <Image src={images.gameOver.src} alt={images.gameOver.alt} width={600} height={400} className={styles.projectImage}/>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  );
};

export default FlappyBeardProject;