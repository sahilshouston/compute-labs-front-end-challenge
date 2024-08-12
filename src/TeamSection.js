// src/components/TeamSection.js
import React from 'react';
import styled from 'styled-components';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    imageUrl: 'path_to_image_1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    imageUrl: 'path_to_image_2.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Engineer',
    imageUrl: 'path_to_image_3.jpg',
  },
];

const TeamSection = () => {
  return (
    <Section>
      <Content>
        <h2>Meet Our Team</h2>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <img src={member.imageUrl} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamCard>
          ))}
        </TeamGrid>
      </Content>
    </Section>
  );
};

export default TeamSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
