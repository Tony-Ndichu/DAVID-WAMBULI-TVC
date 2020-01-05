import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Introduction } from '../components/Introduction';
import { VisionAndMission } from '../components/VisionAndMission';
import { ObjectivesAndCoreValues } from '../components/ObjectivesAndCoreValues';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header />
      <Introduction />
      <VisionAndMission />
      <ObjectivesAndCoreValues />
    </>
  );
};

export default Home;
