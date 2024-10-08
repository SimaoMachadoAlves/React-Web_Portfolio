import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

// container Body
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  heigth: 100%
  overflow-x: hidden;
`;

// component to make the gradient
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar></Navbar>
        <Body>
          <Hero></Hero>
          <Wrapper>
            <Skills></Skills>
            <Experience></Experience>
          </Wrapper>
          <Projects></Projects>
          <Wrapper>
            <Education></Education>
          </Wrapper>
          <Contacts></Contacts>
          <Footer></Footer>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
