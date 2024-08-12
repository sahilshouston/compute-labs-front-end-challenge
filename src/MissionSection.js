// src/components/MissionSection.js
import React from 'react';
import styled from 'styled-components';

const MissionSection = () => {
  return (
    <Section>
      <Content>
        <h2>Our Mission</h2>
        <p>
          At Compute Labs, we are revolutionizing the AI industry by tokenizing GPUs and creating new financial opportunities. 
          We bridge the gap between AI infrastructure and financial markets to unlock the potential of decentralized computing.
        </p>
      </Content>
    </Section>
  );
};

export default MissionSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
