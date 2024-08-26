import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypeWriter from "typewriter-effect";
import HeroImage from "../../images/profile-pic.png";
import HeroBgAnimation from "../HeroBgAnimation";

// Styles for the HeroSection's HeroContainer component
const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

// Styles for the HeroSection's HeroBg component
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 65%;
  height: 100%;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 2560px) {
    width: 66.5%;
  }

  @media screen and (max-width: 1920px) {
    width: 71%;
  }

  @media screen and (max-width: 1280px) {
    width: 94.5%;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 4rem;
    width: 50%;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    width: 90%;
  }

  z-index: -1;
`;
// z-index: -1; is fundamental to the good functionality of the "Check my CV" button

// Styles for the HeroSection's HeroInnerContainer component
export const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

// Styles for the HeroSection's HeroLeftContainer component
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Styles for the HeroSection's HeroRightContainer component
export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media screen and (max-width: 1280px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 820px) {
    padding-top: 40px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 40px;
  }
`;

// Styles for the HeroSection's Title component
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

// Styles for the HeroSection's TextLoop component
const TextLoop = styled.div`
  font-weight: 600px;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

// Styles for the HeroSection's Span component
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

// Styles for the HeroSection's Subtitle component
const Subtitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

// Styles for the HeroSection's ResumeButton component
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media screen and (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

// Styles for the HeroSection's Img component
const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.dimgray};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hello, I'm <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a{" "}
              <Span>
                <TypeWriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                ></TypeWriter>
              </Span>
            </TextLoop>
            <Subtitle>{Bio.description}</Subtitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check my CV
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroImage} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
