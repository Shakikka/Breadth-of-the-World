import './HomePage.css';
import React, { Component } from 'react';
import { checkResponse, getAllHyruleInfo } from '../apiCalls.js'
import Creatures from '../Creatures/Creatures';
import { Link } from 'react-router-dom'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            creatures: {food: [], nonFood: []},
            equipment: [],
            materials: [],
            monsters: [],
            treasure: []
        }
    }

    componentDidMount() {
        fetch('https://botw-compendium.herokuapp.com/api/v2')
        .then(checkResponse)
        .then(data => {
            const info = data.data
            this.setState({creatures: {food: info.creatures.food, nonFood: info.creatures.non_food}, equipment: info.equipment, materials: info.materials, monsters: info.monsters, treasure: info.treasure})
            console.log(this.state.creatures.food)
        })}
        
    

    render() {
        return (
            <div>
                <header>botw
                </header>
                <div>
                    <Link to={'/creatures'}>
                        <button>Creatures</button>
                    </Link>
                    <Link to={'/equipment'}>
                    <button>Equipment</button>
                    </Link>
                    <Link to={'/materials'}>
                        <button>Materials</button>
                    </Link>
                    <Link to={'/monsters'}>
                        <button>Monsters</button>
                    </Link>
                    <Link to={'/treasure'}>
                        <button>Treasure</button>
                    </Link>
                </div>
                <Creatures food={this.state.creatures.food} nonFood={this.state.creatures.nonFood}/>
            </div>
        )
    }
}

export default HomePage;