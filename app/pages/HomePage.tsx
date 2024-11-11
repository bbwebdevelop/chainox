import React from 'react';
import { Header } from '../components/Header';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { How } from "../components/How";
import Advantages from "../components/Advantages";
import { Profit } from "../components/Profit";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { Choose } from '../components/Blockchain/Choose';
import Choose2 from '../components/Blockchain/Choose2';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <How />
      <Advantages />
      <Profit />
      <Choose />
      <Team />
      <Choose2 />
      <Footer />
    </>
  );
};
