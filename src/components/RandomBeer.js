import React, {Component} from 'react'
import {Navbar} from './Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { render } from '@testing-library/react'




export default class Beers extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res =>{
            const data = res.data;
            this.setState({data})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
        <div>
        <Navbar/>
            <div>
                <div>
                    <img src={this.state.data.image_url} />
                </div>
                <div>
                    <h2>{this.state.data.name}</h2>
                    <span>{this.state.data.attenuation_level}</span>
                </div>
                <div>
                    <h3>{this.state.data.tagline}</h3>
                    <span>{this.state.data.first_brewed}</span>
                </div>
                <div>
                    <p>{this.state.data.description}</p>
                </div>
                <div>
                    <p>{this.state.data.contributed_by}</p>
                </div>
            </div>
                
        </div>
            
    )    
}
}
