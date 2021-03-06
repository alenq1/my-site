import React, {useState } from 'react'
import {portfolio} from '../sources/data'
import { Button, Card, Accordion  } from 'react-bootstrap'
import PortCarousel from './PortCarousel'
import { FaAngleDoubleDown,
    } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'






const Portfolio = () => {

   // const [toggle, setToggle] = useState(false)
   // const [isHover, setHover] = useState(false)
    const [show, setShow] = useState(false)
   // const [index, showIndex] = useState(0)


    //const CustomButton = () => 

            
    return (
        <>
                <Fade bottom>
                <div className="row container">
                

                
                {portfolio.map( (detail, index) => (
                
                <Card className='m-4 col-lg-5 col-md-12 col-sm-12' key={index} 
                style={{                 }}>
                <Card.Header>
                    <h6 className='lead'>{detail.project}{detail.repo}</h6>
                
                </Card.Header>
                <Card.Body>
                <PortCarousel content={detail} key={index}/>
                
                <div>
                
                </div>
                <div>
                
                <Accordion>
                <Accordion.Toggle as={Button} eventKey={index} className="m-3">
                <FaAngleDoubleDown size='2em' onclick={()=> setShow(!show)}/> Details
                </Accordion.Toggle>
                
                
                <Accordion.Collapse eventKey={index}>
                <div>
                <Fade bottom >
                {detail.description.map((list, index) => (
                
                <li key={index}>{list}</li>
                
                ))}    
                </Fade>
                </div>
                
                </Accordion.Collapse>    
                </Accordion>
                </div>
                <Card.Footer>
                    Stack Used
                    {detail.stack.map((stack, index) => (

                        stack
                    ))}
                </Card.Footer>  
                </Card.Body>

                </Card>
                
                ))}
                
                
                </div>
                </Fade>
        </>
    )
}

export default Portfolio


const StyledPortfolio = styled.div `




.card-portfolio {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 0px;
    text-align: left;
    margin: 6rem 1.8rem;
    
    .header, .footer {
        display: block;
        background: var(--card-header-footer);
        color: whitesmoke;
        padding: 1rem 0rem;
        opacity: 0.9;
        text-align: center;
        font-size: 1.5rem;

        a{
            color: whitesmoke;
        }
    }

    .body{
        display: flex;
        flex-wrap: wrap;
        background: var(--card-background);
        color: whitesmoke;
        
        width: 100%;
        
        .projects {
            margin: 2.5rem 1.5rem; 
            text-align: left;            
            display: flex;
            flex-wrap: wrap;
            
            .slide-show{
                width: 50%;
            }

            .description {
                width: 50%;
            }

            h5{
                margin-top: 1.5rem;
            }

            li{
                margin: 1rem 2rem;
            }

        }
        
        }
        
        .footer {
            display: flex;
            justify-content: space-between;
            span:first-child {
                margin-left: 3.5rem;
                
            }
            span:last-child {
                margin-right: 3.5rem;
                font-size: 1rem;
            }
        }
    }

@media screen and (max-width: 640px) {
    
    .card-portfolio {

        margin: 4rem 1rem;

    .header, .footer {
        padding: 0.75rem 0rem;
    }

    .body {
        
        width: 100%;

        .projects {
             
            width: 100%;
            display: block;
            
            .slide-show{
                width: 85%;
            }

            .description {
                width: 100%;
            }

            h5{
                margin-top: 1.5rem;
            }

            li{
                margin: 1rem 2rem 1rem 0rem;
                text-align: center;
            }
        }       
    }

    .footer {
            display: flex;
            justify-content: space-between;
            span:first-child {
                margin-left: 1rem;
                font-size: 1rem;
            }
            span:last-child {
                margin-right: 1rem;
                font-size: 0.6rem;
            }
        }

}

}



`

export const NewPortfolio = () => {

    // const [toggle, setToggle] = useState(false)
    // const [isHover, setHover] = useState(false)
    const [show, setShow] = useState(false)
    // const [index, showIndex] = useState(0)
     //const CustomButton = () => 

    return (
        <StyledPortfolio>
                
                    <div>                                   
                        {portfolio.map( (detail, index) => (                 
                        <Fade bottom>
                        <div className='card-portfolio' key={index}>
                            <div className='header'>
                                <h4>{detail.project}{detail.repo}</h4>                 
                            </div>
                            <div className='body'>                                
                                <div className='projects'>
                                    <div className='slide-show'>
                                        <PortCarousel content={detail} key={index}/>
                                    </div>
                                    <div className='description'>
                                            <Fade bottom >
                                                {detail.description.map((list, index) => (                 
                                                    <li key={index}>{list}</li>                 
                                                ))}    
                                            </Fade>
                                    </div>
                                </div>
                            </div>   
                            <div className='footer'>
                                <span>Stack Used</span>
                                <span>
                                {detail.stack.map((stack, index) => ( 
                                    stack
                                ))}
                                </span>
                            </div>  
                        </div>
                        </Fade>    
                        ))}
                    </div>
                
            </StyledPortfolio>
        )
}

