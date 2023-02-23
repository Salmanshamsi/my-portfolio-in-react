import React from 'react'
import Card from 'react-bootstrap/Card';
import { projectData } from '../Data/data';
import "../proj.css"

const ProjItem = () => {

        const data =  projectData.map((CurEl,Index)=>{return(
                <div className='col-sm'>
                <Card bg='dark'>
                <Card.Title>{CurEl.catagory}</Card.Title>
                <Card.Img variant="top" src={CurEl.src} />
                <Card.Body>
                <Card.Title>{CurEl.title}</Card.Title>
                <Card.Text>{CurEl.disc}</Card.Text>
                <div className="container px-4">
                <div className="row gx-5">
                    <div className="col">
                    <a className='icons' href={CurEl.url}><i className="fa-regular fa-eye"></i></a>
                    <a className='icons' href={CurEl.gitLink}><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                </div>
                </Card.Body>
                </Card>
                </div>
            )});
    
  return (
    <div className="container">
    <div className="row">
        {data}
    </div>
    </div>
  )
}

export default ProjItem