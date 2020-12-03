import React from 'react'
import {Navbar} from './Navbar'
import axios from 'axios'



export const BeerDetail = ({location}) => {
    return (
        <div>
        <Navbar/>
            <div>
                <div>
                    <img src={location.state.image_url} />
                </div>
                <div>
                    <h2>{location.state.name}</h2>
                    <span>{location.state.attenuation_level}</span>
                </div>
                <div>
                    <h3>{location.state.tagline}</h3>
                    <span>{location.state.first_brewed}</span>
                </div>
                <div>
                    <p>{location.state.description}</p>
                </div>
                <div>
                    <p>{location.state.contributed_by}</p>
                </div>
            </div>
                
        </div>
            
    )
}
