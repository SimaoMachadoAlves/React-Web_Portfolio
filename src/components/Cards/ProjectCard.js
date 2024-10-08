import React from "react";
import styled from "styled-components";

// Styles for the ProjectCard's CardContainer component
const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  transition: all 0.8s ease-in-out;
`;

// Styles for the ProjectCard's Card component
const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  &:hover ${Button} {
    display: block;
  }
`;

// Styles for the ProjectCard's Image component
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

// Styles for the ProjectCard's Tags component
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

// Styles for the ProjectCard's Tag component
const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

// Styles for the ProjectCard's Details component
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

// Styles for the ProjectCard's Title component
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

// Styles for the ProjectCard's Date component
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

// Styles for the ProjectCard's Description component
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  cursor: pointer;
`;

// Styles for the ProjectCard's Members component
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
// Styles for the ProjectCard's Avatar component
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

// function to go to the github repo
const checkOnGithub = (project) => {
  window.open(project.github, "_blank").focus();
};

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} onClick={() => checkOnGithub(project)}></Image>
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title onClick={() => checkOnGithub(project)}>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description onClick={() => checkOnGithub(project)}>
          {project.description}
        </Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar
            src={member.img}
            onClick={() => {
              window.open(member.linkedin, "_blank").focus();
            }}
          ></Avatar>
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
