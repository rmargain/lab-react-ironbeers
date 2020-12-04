import React, {useState, useEffect} from 'react'
import {Navbar} from './Navbar'
import axios from 'axios'



export const BeerDetail = (props) => {
     const [data, setData] = useState([])
     const fetchData = async() =>{
        const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
        const json = await res.data
        setData(json)
    }
    useEffect(() => {
         fetchData()}, []
    )
    return (
        <div>
        <Navbar/>
            <div>
                <div>
                    <img src={data.image_url} />
                </div>
                <div>
                    <h2>{data.name}</h2>
                    <span>{data.attenuation_level}</span>
                </div>
                <div>
                    <h3>{data.tagline}</h3>
                    <span>{data.first_brewed}</span>
                </div>
                <div>
                    <p>{data.description}</p>
                </div>
                <div>
                    <p>{data.contributed_by}</p>
                </div>
            </div>
                
        </div>
            
    )
}
