import React from "react";
import styled from "styled-components";
import email from "../../images/email.png";
import linkedin from "../../images/linkedin.png";
import { Bio } from "../../data/constants";

// Styles for the Contacts Container component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 60px;
  padding-top: 50px;
`;

// Styles for the Contacts Title component
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;

  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

// Styles for the Contacts Description component
const Description = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
  margin-top: 20px;
`;

// Styles for the Contacts ContactsContainer component
const ContactContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  margin-top: 2rem;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

// Styles for the Contacts Image component
const Image = styled.img`
  width: 3rem;
  height: 3rem;

  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

// Styles for the Contacts Text component
const Text = styled.a`
  padding: 0 1rem;
  color: ${({ theme }) => theme.text_primary}};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 0 0.5rem;
  }

`;

const Contacts = () => {
  return (
    <Container id="contacts">
      <Description>Get in touch</Description>
      <Title>Contact Me</Title>
      <ContactContainer>
        <Image src={email}></Image>
        <Text href="mailto:simaomachadoalves15@gmail.com" target="_blank">
          simaomachadoalves15@gmail.com
        </Text>
        <Image src={linkedin}></Image>
        <Text href={Bio.linkedin} target="_blank">
          LinkedIn
        </Text>
      </ContactContainer>
    </Container>
  );
};

export default Contacts;
