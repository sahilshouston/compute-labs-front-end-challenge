// src/components/ContactSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  return (
    <Section>
      <Content>
        <h2>Get in Touch</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </Section>
  );
};

export default ContactSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
