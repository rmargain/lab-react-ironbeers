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
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
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
            {this.state.data.map((item, index) => {
                return (
                    <div key={index}>
                    <div className='beerContainer'>
                    <Link to={{
                        pathname:'/beer-detail',
                        state: item
                    }}>
                        <div className='imageContainer'>
                            <img src={item.image_url} alt={item.name} className='beerImage'/>
                        </div>
                        <div className='beerDesc'>
                            <h2 className='beerName'>{item.name}</h2>
                            <h4 className='tagline'>{item.tagline}</h4>
                            <span className='contributor'><b>Created by: </b>{item.contributed_by}</span>
                        </div> 
                    </Link>
                    
                    </div>
                    <hr/>
                    </div>
                )}
                
                
                )}
        </div>
            
        </div>
    )
    }
    
}
