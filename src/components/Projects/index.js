import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

// Styles for the Projects Container component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  padding-top: 70px;
`;

// Styles for the Projects Wrapper component
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  padding: 10px 0px 100px 0;
`;

// Styles for the Projects Title component
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

// Styles for the Projects Description component
const Description = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Styles for the Projects ToogleGroup component
const ToogleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styles for the Projects ToogleButton component
const ToogleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `
        background: ${theme.primary + 20};
    `}

  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

// Styles for the Projects Divider component
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

// Styles for the Projects CardContainer component
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;

const Projects = () => {
  const [toogle, setToogle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Description>Check my</Description>
        <Title>Projects</Title>
        <ToogleGroup>
          {toogle === "all" ? (
            <ToogleButton active value="all" onClick={() => setToogle("all")}>
              ALL
            </ToogleButton>
          ) : (
            <ToogleButton value="all" onClick={() => setToogle("all")}>
              ALL
            </ToogleButton>
          )}
          <Divider></Divider>
          {toogle === "web app" ? (
            <ToogleButton active onClick={() => setToogle("web app")}>
              WEB APPLICATION
            </ToogleButton>
          ) : (
            <ToogleButton onClick={() => setToogle("web app")}>
              WEB APPLICATION
            </ToogleButton>
          )}
          <Divider></Divider>
          {toogle === "app" ? (
            <ToogleButton active onClick={() => setToogle("app")}>
              APPLICATION
            </ToogleButton>
          ) : (
            <ToogleButton onClick={() => setToogle("app")}>
              APPLICATION
            </ToogleButton>
          )}
        </ToogleGroup>
        <CardContainer>
          {toogle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toogle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
