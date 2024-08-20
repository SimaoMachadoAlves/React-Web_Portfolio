import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

// Styles for the Skills Container component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

// Styles for the Skills Wrapper component
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

// Styles for the Skills Title component
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

// Styles for the Skills Description component
const Description = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Styles for the Skills SkillsContainer component
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

// Styles for the Skills Skill component
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

// Styles for the Skills SkillTitle component
const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

// Styles for the Skills SkillList component
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

// Styles for the Skills SkillItem component
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

// Styles for the Skills SkillImage component
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>Explore my main skills</Description>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image}></SkillImage>
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
