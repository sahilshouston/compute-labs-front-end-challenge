import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import FeaturesSection from './FeaturesSection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';

const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <ContactSection />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
`;
