import React from "react";
import styled from "styled-components";

// Styles for the ExperienceCard's Document component
const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity?: 0.8;
  }
`;

// Styles for the ExperienceCard's Card component
const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

// Styles for the ExperienceCard's Top component
const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

// Styles for the ExperienceCard's Logo component
const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

// Styles for the ExperienceCard's Body component
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Styles for the ExperienceCard's Role component
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Styles for the ExperienceCard's Company component
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styles for the ExperienceCard's Duration component
const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

// Styles for the ExperienceCard's Description component
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styles for the ExperienceCard's Skills component
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

// Styles for the ExperienceCard's ItemWrapper component
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Styles for the ExperienceCard's Skill component
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img}></Logo>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      <Description>
        {experience.desc}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
            </Skills>
            <ItemWrapper>
              {experience.skills.map((skill) => (
                <Skill>∘ {skill}</Skill>
              ))}
            </ItemWrapper>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="_blank">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
