import React from 'react';
import { Header } from '../components/Header';
import { Introduction } from '../components/Introduction';
import { VisionAndMission } from '../components/VisionAndMission';
import { ObjectivesAndCoreValues } from '../components/ObjectivesAndCoreValues';

export const Home = () => (
  <>
    <Header />
    <Introduction />
    <VisionAndMission />
    <ObjectivesAndCoreValues />
  </>
);

export default Home;
