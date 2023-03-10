import React from 'react'
import styled from 'styled-components';
import map from "./imag/map.png"



const Contact = () => {
  return (
    <div id='contact' >
        <section>
            <ContactStyled id='contact'>
            <h1>Contact Me</h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, facere.</h6>
            <div className="subscribe-con">
            </div>
            <div className="contact-info">
                <div className="map-section">
                    <img src={map} alt="" />
                </div>
                <form action="" className="form-section">
                    <div className="input-control">
                        <input type="text" placeholder='Your name' />
                        <input type="email" placeholder='Email address' />
                    </div>
                    <div className="input-control">
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className="input-control">
                        <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
                    </div>
                    <div className="btn-con">
                    <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </ContactStyled>
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

const ContactStyled = styled(SectionLayout)`
    position: relative;
    .subscribe-con{
        position: absolute;
        top: -240px;
        left: 0;
        width: 100%;
        padding-right: 18rem;
        @media screen and (max-width: 1600px){
            padding-right: 10rem;
        }
        @media screen and (max-width: 1150px){
            padding-right: 6rem;
        }
        @media screen and (max-width: 1255px){
            padding-right: 0;
            margin: 0;
        }
        @media screen and (max-width: 653px){
            top: -270px;
        }
    }

    &{
        background-color:black;
        color:white;
    }

    .contact-info{
        display: flex;
        gap: 2rem;
        margin-top: 3.rem;
        @media screen and (max-width: 973px){
            flex-direction: column;
        }
        .map-section{
            width: 40%;
            position: relative;
            img{
                width: 100%;
                object-fit: cover;
                opacity: 0.1;
            }
        }
        .form-section{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            .input-control{
                display: flex;
                gap: 1rem;
                input, textarea{
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    font-size: inherit;
                    outline: none;
                    border: none;
                    font-family: inherit;
                    resize: none;
                }
            }
        }
    }
`;


export default Contact