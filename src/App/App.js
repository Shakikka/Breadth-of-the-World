import './App.css';
import { Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import { checkResponse, getAllHyruleInfo } from '../apiCalls.js'
import Creatures from '../Creatures/Creatures'

class App extends Component {
  constructor() {
    super()
    this.state = {
      creatures: { food: [], nonFood: [] },
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
        this.setState({ creatures: { food: info.creatures.food, nonFood: info.creatures.non_food }, equipment: info.equipment, materials: info.materials, monsters: info.monsters, treasure: info.treasure })
        console.log(this.state.creatures.food)
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route exact path='/creatures' render={() => <Creatures food={this.state.creatures.food} nonFood={this.state.creatures.nonFood}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
