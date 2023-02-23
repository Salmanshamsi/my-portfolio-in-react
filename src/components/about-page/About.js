import React from 'react'
import styled from 'styled-components';
import about from "./images/about.jpg"
import shape1 from "./images/shape1.png"
import shape2 from "./images/shape2.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./about.css"



const About = () => {
  return (
    <div id='about' >
        <section>
        <AboutStyled >
            <div className="about-info">
                <div className="about-image">
                    <img src={about} alt="" />
                </div>
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                    Hi, I'm salman, a fresh BSCS student with a passion for technology and a drive to learn.
                    and i have done a diploma of web&App development and currently im work as freelance 
                    beacuse im focusing my education
                    </p>
                    <div className="progress-bars">
                        <h6>JAVASCRIPT</h6>
                        <ProgressBar className='ProgressBar'  variant='success'now={60} label={`JAVASCRIPT 60%`} />
                        <h6>HTML&CSS</h6>
                        <ProgressBar className='ProgressBar' variant='warning' now={80} label={`HTML&CSS 80%`} />
                        <h6>REACT.JS</h6>
                        <ProgressBar className='ProgressBar' variant='danger'  now={70} label={`REACT.JS 70%`} />
                    </div>
                </div>
            </div>
            <div className="stats-container">
            </div>
            <img alt='shape' src={shape1} className="shape1" />
            <img alt='shape' src={shape2} className="shape2" />
        </AboutStyled>

        </section>
    </div>
  )
}

const SectionLayout = styled.section`
    padding: 8rem 18rem;
    @media screen and (max-width: 1600px){
        padding: 8rem 10rem;
    }
    @media screen and (max-width: 1150px){
        padding: 6rem 6rem;
    }
    @media screen and (max-width: 650px){
        padding: 3rem 3rem;
    }
`;

const AboutStyled = styled(SectionLayout)`
    background-color:rgb(36, 39, 35);
    color:white;
    position: relative;
    overflow: hidden;
    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);
        }
        .about-image{
            padding: 1.5rem;
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }

        .about-content{
            h1
            {
                font-weight:600;
                color:white-smoke;
            }
            p
            {
                font-size:20px;
                color:color: rgb(66, 69, 65);
            }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
    .shape2{
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
`;

export default About