import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";

// Styles for the Experience's Container component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0px;
`;

// Styles for the Experience's Wrapper component
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

// Styles for the Experience's Title component
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

// Styles for the Experience's Description component
const Description = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Styles for the Experience's TimeLineSection component
const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Description>Know my</Description>
        <Title>Experience</Title>
        <TimeLineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector></TimelineConnector>
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience}></ExperienceCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
