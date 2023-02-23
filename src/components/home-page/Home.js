import React from 'react'
import Navbar from '../navigation/Navbar'
import styled from 'styled-components'
import  line from "./images/line.png"
import avatar from "./images/avatar.png"
import About from '../about-page/About'
import Expirence from '../expirence-page/Expirence'
import Proj from '../projects-page/Proj'
import Contact from '../contact-page/Contact'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <section>
        <HeaderStyled >
            <div className="left-header">
                <div className="left-h-content">
                    <h2>Hi,</h2>
                    <h1>I am salman<span>.</span></h1>
                    <p className="profession">Website Developer</p>
                    <p className='description'>
                    Front-End Web Developer with Expertise in HTML, CSS, and JavaScript, & react.js
                    </p>
                </div>
            </div>
            <div className="right-header">
            <div className="image-con">
                <img src={avatar} alt="" />
            </div>
            </div>
            <div className="image-overlay"></div>
            <img src={line} alt="" className="image-line" />
        </HeaderStyled>
        <About/>
        <Expirence/>
        <Proj/>
        <Contact/>
        </section>
    </div>
  )
}

const HeaderStyled = styled.header`
    position: relative;
    overflow: hidden;
    height: 100vh;
    padding: 1rem 18rem;
    display: grid;
    background: rgb(36, 39, 35);
    color:white;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1600px){
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 1150px){
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 1060px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .particles-con{
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    .burger-menu{
        position: fixed;
        top: 2rem;
        right: 3rem;
        display: flex;
        flex-direction: column;
        z-index: 15;
        cursor: pointer;
        .line{
            width: 35px;
            height: 4px;
            margin-bottom: 5px;
            border-radius: 7px;
            transition: all .3s ease-in-out;
            display: flex;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
            &:last-child{
                margin-bottom: 0;
                width: 20px;
                align-self: flex-end;
            }
        }
        &:hover{
            .line:last-child{
                width: 35px;
            }
        }
    }

    .left-header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1060px){
            .left-h-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            p{
                text-align: center;
            }
            .profession{
                margin-top: 1rem;
            }
        }
        h2{
            font-size: 4.5rem;
        }
        h1{
            font-size: 6rem;
            span{
                color:yellow
            }
        }
        .profession{
            font-size: 2rem;
            font-weight: 500;
            color: rgb(77, 111, 63);
        }
        .description{
            margin-top: 1rem;
            margin-bottom: 2rem;
            line-height: 2rem;
            color: color: rgb(66, 69, 65);
            font-size:18px;
        }
    }

    .image-con{
        position: absolute;
        right: 0;
        bottom: 0px;
        z-index: 2;
        @media screen and (max-width: 1060px){
            display: none;
        }
        img{
            width: 600px;
            drop-shadow(5px -5px 20px rgba(0,0,0, 0.65));
        }
    }

    .image-overlay{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        opacity: 0.3;
        @media screen and (max-width: 1060px){
            display: none;
        }
    }

    .image-line{
        position: absolute;
        right: 0;
        top: -15%;
        width: 105%;
        z-index: 1;
        @media screen and (max-width: 1060px){
            display: none;
        }
    }
`;

export default Home