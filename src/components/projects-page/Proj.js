import React from 'react'
import "./proj.css"
import ProjItem from './item/ProjItem'
import styled from 'styled-components'

const Proj = () => {
  return (
    <SectionStyle>
      <div id='proj' >
        <div className="headin">
        <h1>My Projects</h1>
        <h6>Here's some of My Projects that i was created during my diploma in web&App development</h6>
        </div>
        <section className='box'>
        <ProjItem/>
        </section>
      </div>
    </SectionStyle>
  )
}


const SectionStyle = styled.header`
  background:rgb(36, 39, 35);
  color:white;
`


export default Proj

