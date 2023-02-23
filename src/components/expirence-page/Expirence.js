import React from 'react'
import styled from 'styled-components';
import Timeline from './timeline/Timeline';

const Expirence = () => {

  return (
    <div id='expr' >
        <section>
        <ExperienceStyled >
            <h1>Expirence</h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatem.</h6>
            <div className="timeline-con">
                <Timeline/>
            </div>
        </ExperienceStyled>
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

const ExperienceStyled = styled(SectionLayout)`
{
    background: rgb(36, 39, 35);
    color:White;    
.timeline-con{
        margin-top: 3.5rem;
    }
}
`;


export default Expirence