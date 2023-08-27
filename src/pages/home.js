import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';
import axios from 'axios';
import {
  MainWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "../components/styles";
import {Preloader} from '../pageloader/index';
import Logo from "../assets/logo.svg";
import { ReactComponent as FooterLogo } from "../assets/logo.svg";
import { ReactComponent as ResumeIcon } from "../assets/cv.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as HashnodeIcon } from "../assets/hashnode.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/stack-overflow.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import {ReactComponent as WebIcon} from '../assets/web.svg';
import {ReactComponent as IGIcon} from '../assets/instagram.svg';
import {ReactComponent as QuoraIcon} from '../assets/quora.svg';
import {tools, projects, settings} from "../components/resources";
import resume from '../assets/airahyusuff.pdf';

export const findImg = (val, arr) => {
  const result = arr.find((el) => el.public_id.includes(val) === true)
  return result.public_id
}

const Home = () => {
  const [currentYear, setCurrentYear] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
        axios.get('https://res.cloudinary.com/khairahscorner/image/list/project.json')
        .then(res => {
          setAllImages([...res.data.resources]);
          setLoading(false);     
        })
  }, []);

  return (
    loading ? Preloader : (
    <div>
      <HeaderWrapper>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div className="resume-text">
            <a href={resume} download="Airah-Yusuff-Resume.pdf">
              Download My Resume
            </a>
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
            <h1 className="intro-heading">Hi, I'm Airat Yusuff.</h1>
            <p className="intro-desc">
              Software Engineer &#x2022; AWS Community Builder &#x2022; Cloud Services Enthusiast
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
              <h2 className="section-heading">Brief Intro.</h2>
              <div className="bio">
                <p>
                  I'm a software engineer with about 3 years of experience developing
                  customer-focused solutions with a delightful user
                  experience.{" "}
                </p>
                <p>
                  As an avid learner, I thrive in work environments that provide opportunities for career growth and embrace diversity potentials.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading">Tools I Use.</h2>
                <div className="container">
                <Slider {...settings}>
                      {tools.map((item, index) => (
                        <div className="each-slide" key={`tool-${index}`} style={{width: "150px"}}>
                          <a href={item.url}>
                            <img src={item.logo} alt={`logo-${index}`} />
                          </a>
                        </div>
                      ))}
                </Slider>
                </div>
            </div>
          </div>
        </div>
        <div className="third-section">
        <div className="inner-content inner-padding">
            <div>
              <h2 className="section-heading">Past Projects.</h2>
              <div className="flex-row">
                  {projects.map((project, index) => (
                    <div className="member" key={`project-${index}`}>
                      <div className="inner">
                      <div className="img-box">
                        <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(project.mark, allImages)}.jpg`} alt={project.name} />
                        <div className="overlay"/>
                      </div>
                      <div className="content">
                        <div className="text">
                          {project.name}
                        </div>
                        <a className="btn" href={project.url} target="_blank" rel="noreferrer"> 
                          <WebIcon />
                        </a>
                      </div>
                      </div>
                    </div>
                  ))}      
                </div>
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="inner-content inner-padding">
            <div className="section-wrapper">
              <h2 className="section-heading">Outside of Work.</h2>
              <div className="bio mb-20">
                <p>
                I contribute to the AWS Community Builders blog as a Community Builder, and I am also a member of tech communities like She Code Africa, Tech Sisters, etc.
                </p>
                <p>I also create technical content for my blog and share general helpful tips.
                </p>
              </div>
              <div className="social-icons">
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory"
                >
                  <WebIcon />
                </a>
              </div>

              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://khairahscorner.hashnode.dev"
                >
                  <HashnodeIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tech-sisters.com/"
                >
                  <WebIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/airahinthecloud"
                >
                  <IGIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://shecodeafrica.org/"
                >
                  <WebIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.quora.com/profile/Airah-Yusuff"
                >
                  <QuoraIcon />
                </a>
              </div>
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
          © {currentYear} - Airat Yusuff. All rights reserved.
        </div>
      </FooterWrapper>
    </div>
    )
  );
};

export default Home;
