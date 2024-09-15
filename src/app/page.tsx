import React from 'react';
import Header from '../components/header';
import PhotoCarousel from '@component/components/PhotoCarousel';
import DynamicBackgroundSection from '@component/components/DynamicBackgroundSection';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <DynamicBackgroundSection/>
      <PhotoCarousel/>
    </div>
  );
};

export default HomePage;

