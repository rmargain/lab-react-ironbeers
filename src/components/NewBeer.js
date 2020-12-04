import React, {Component} from 'react'
import {Navbar} from './Navbar'
import axios from 'axios'


export default class NewBeer extends Component{
    state={
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }
    
    onNameChange = e =>{
        this.setState({
            name: e.target.value
        })
    }

    onTaglineChange = e =>{
        this.setState({
            tagline: e.target.value
        })
    }

    onDescriptionChange = e =>{
        this.setState({
            description: e.target.value
        })
    }

    onFirstBrewedChange = e =>{
        this.setState({
            first_brewed: e.target.value
        })
    }

    onBrewerTipsChange = e =>{
        this.setState({
            brewer_tips: e.target.value
        })
    }

     onAttenuationLevelChange = e =>{
        this.setState({
            attenuation_level: e.target.value
        })
    }
    
    onContributedByChange = e =>{
        this.setState({
            contributed_by: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const data = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewer_tips: this.state.brewer_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    
    render(){
        return (
        <div>
        <Navbar/>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label> <br/>
            <input type='text' value={this.state.name} onChange={this.onNameChange} required></input>
            <br/>
            <label>Tagline</label><br/>
            <input type='text' value={this.state.tagline} onChange={this.onTaglineChange} required></input>
            <br/>
            <label>Description</label><br/>
            <input type="text" value={this.state.description} onChange={this.onDescriptionChange} required></input>
            <br/>
            <label>First Brewed</label><br/>
            <input type="text" value={this.state.first_brewed} onChange={this.onFirstBrewedChange} required></input>
            <br/>
            <label>Brewer Tips</label><br/>
            <input type="text" value={this.state.brewer_tips} onChange={this.onBrewerTipsChange} required></input>
            <br/>
            <label>Attenuation Level</label><br/>
            <input type="number" value={this.state.attenuation_level} onChange={this.onAttenuationLevelChange} required></input>
            <br/>
            <label>Contrinuted By</label><br/>
            <input type="text" value={this.state.contributed_by} onChange={this.onContributedByChange} required></input>
            <br/>
            <button type="submit">Add New</button>
        </form>
            
        </div>
    )
    }
    
}
