// src/components/FeaturesSection.js
import React from 'react';
import styled from 'styled-components';
import { RiveComponent } from '@rive-app/react-canvas';

const FeaturesSection = () => {
  return (
    <Section>
      <Content>
        <h2>Key Features</h2>
        <FeaturesGrid>
          <FeatureCard>
            <RiveComponent src="path_to_your_rive_file_1.riv" />
            <h3>Decentralized GPU Access</h3>
            <p>
              Access GPUs from anywhere in the world with our decentralized
              platform.
            </p>
          </FeatureCard>
          <FeatureCard>
            <RiveComponent src="path_to_your_rive_file_2.riv" />
            <h3>Financial Integration</h3>
            <p>
              Seamlessly integrate with financial markets for innovative trading
              strategies.
            </p>
          </FeatureCard>
          <FeatureCard>
            <RiveComponent src="path_to_your_rive_file_3.riv" />
            <h3>High Security</h3>
            <p>
              Our platform ensures top-notch security for all your AI
              computations.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </Content>
    </Section>
  );
};

export default FeaturesSection;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #555;
  }
`;
