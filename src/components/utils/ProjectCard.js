import React from 'react'
import '../styles/ProjectCard.css'
import { faExternalLinkAlt,faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectCard(props) {
    var techstack =[<p>Tech Stack: </p>]
    for (var i in props.techstack) {
        techstack.push(<img src={props.techstack[i]} key={i} className='techstackIcon'></img>)
    }
    return (
        <div className='projectCardWrapper'>
            <img className='projectImage' src={props.image}></img>
            <div className='techStackWrapper'>
                <h1>{props.projectTitle}</h1>
                <div className='links'>
                    {props.deployed && 
                        <a className='deployedLink' href={props.deployed} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                    }
                    <a className='gitLink' href={'https://github.com/ayush2-wd/' + props.github} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
            <div className='techIconWrapper'>
            {techstack}
            </div>
            <p>{props.summary}</p>
        </div>
    )
}
