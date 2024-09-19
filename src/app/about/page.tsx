import React from 'react';
import Header from '../../components/header';
import ImageAndText from '../../components/ImageAndText';
import Footer from '../../components/footer';

const AboutPage = () => {

  const briefSummary1 = "I'm Gaurab Acharya and I'm a senior undergraduate student " +
                       "studying biomedical engineering with a specialization in systems and signals. " +
                       "Growing up, my main interest was playing " +
                       "basketball from primary school until the end of secondary school. " +
                       "Through learning how to train in basketball, I learned a lot about optimizing atheletic performance and I was interested in learning about biology. " +
                       "I also had an interest in math and technology in school, so when exploring further education, Biomedical Engineering was the perfect option to explore my interests. ";

  const briefSummary2 = "Throughout university, I've taken countless courses focusing on Computer Science, Computer and Electrical Engineering, " +
                       "Biology, Chemistry, and Biomedical Engineering. I learned how to apply these skills in a medical setting providing me experience in many different fields. " +
                       "I've also gained industry experience that grew my skillset, working as a software developer at 2 companies within the time of my degree. " +
                       "In my free time I continue to explore my interests by coaching youth basketball in my local community " +
                       "and developing personal software projects. As I am nearing graduation, I'm looking for opportunties in the industry to make an impact with " +
                       "software and continuing to explore my curiosity.";

  const articles  = [
    { src: '/images/ARIcon.png', width: 1920, height: 1080,
      header: "Medical Device Augmented Reality App", 
      text: "Developed an augmented reality app using Unity to project " + 
       "virtual customized objects for a medical device startup, " + 
       "using Apple ARKit's image tracking and projection",
      projectUri: "/projects/ar",
    },
  ];

  return (
    <div>
      <Header/>
      <div style={{background:'linear-gradient(45deg, #000428, #004e92)'}}>
        <ImageAndText
          imageSrc="/images/GaurabPortrait.png"
          alt="Gaurab Acharya's Portrait"
          header="Hi! Let Me Introduce Myself"
          text={briefSummary1}
          text2={briefSummary2}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;