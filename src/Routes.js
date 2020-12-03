import React from 'react'
import {Switch, Route} from 'react-router-dom'
import  Beers  from './components/Beers'
import { NewBeer } from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import { Home } from './components/Home'
import {BeerDetail} from './components/BeerDetail'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/new-beer' component = {NewBeer}/>
        <Route exact path='/random-beer' component = {RandomBeer}/>
        <Route exact path='/beer-detail' component = {BeerDetail}/>
    </Switch>
)

export default Routes