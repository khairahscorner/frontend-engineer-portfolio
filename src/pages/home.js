import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MainWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "../components/styles";
import Logo from "../assets/logo.svg";
import { ReactComponent as FooterLogo } from "../assets/logo.svg";
import { ReactComponent as ResumeIcon } from "../assets/cv.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as HashnodeIcon } from "../assets/hashnode.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/stack-overflow.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import resume from '../assets/airahyusuff.pdf';

const tools = [
  {
    type: "HTML",
    list: "HTML5"
  },
  {
    type: "CSS",
    list: "SCSS, TailwindCSS"
  },
  {
    type: "CSS-in-JS",
    list: "Styled Components"
  },
  {
    type: "JavaScript",
    list: "React, Gatsby, Nuxt, Vue, TypeScript"
  },
  {
    type: "Query",
    list: "GraphQL, SQL"
  },
  {
    type: "Editor",
    list: "VSCode"
  },
  {
    type: "VCS",
    list: "Git"
  },
]

const Home = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <HeaderWrapper>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div className="resume-text">
          <a href={resume} download="Airah-Yusuff-Resume.pdf">Download my CV</a>
        </div>
          <div className="resume-icon">
            <a href={resume} download="Airah-Yusuff-Resume.pdf">
              <ResumeIcon />
            </a>
          </div>
        </div>
      </HeaderWrapper>

      <MainWrapper>
        <div className="first-section inner-content">
          <div className="intro">
            <h1 className="intro-heading">Airah Yusuff</h1>
            <p className="intro-desc">
              Frontend Engineer &#x2022; Occasional Writer
            </p>
            <div className="separator"></div>
            <div className="social-icons">
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/khairah-yusuff/"
                >
                  <LinkedinIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/khairahscorner"
                >
                  <GithubIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://khairahscorner.hashnode.dev/"
                >
                  <HashnodeIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/11233049/airah-yusuff?tab=answers"
                >
                  <StackOverflowIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:airahyusuff@gmail.com?subject=From Your Portfolio"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="inner-content inner-padding">
            <div className="section-wrapper">
              <h2 className="section-heading">Brief Intro</h2>
              <div className="bio">
                <p>
                  I'm a Frontend Engineer with 3+ years of experience developing
                  visually appealing web applications with delightful user
                  experience.{" "}
                </p>
                <p>
                  As an avid learner, I thrive in work environments that provide
                  measurable metrics for career growth, great opportunities for
                  skills improvement and promotes close team collaborations and
                  soft skills acquisition.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading">Tools I Use</h2>
              <div className="tools">
                  {tools.map((item, index) => (
                    <div className="item" key={`tools-${index}`}>
                      <span className="type"> {item?.type} </span>
                      <span className="type"> → </span>
                      <span className="list">{item?.list}</span>
                    </div>
                  ))}      
                </div>
            </div>
          </div>
        </div>
      </MainWrapper>

      <FooterWrapper>
        <div className="footer-logo">
          <FooterLogo />
        </div>
        <div className="credit">
          © {currentYear} - Airah Yusuff. All rights reserved.
        </div>
      </FooterWrapper>
    </div>
  );
};

export default Home;
