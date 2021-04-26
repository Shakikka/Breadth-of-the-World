import './App.css';
import { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import { checkResponse } from '../apiCalls.js';
import Creatures from '../Creatures/Creatures';
import Monsters from '../Monsters/Monsters';
import Treasure from '../Treasure/Treasure';
import Materials from '../Materials/Materials';
import Equipment from '../Equipment/Equipment';
import Items from '../Items/Items';

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
        console.log(data.data)
      })
  }

  listItems = (category) => {
    switch (category) {
      case 'creatures':
        return this.state.creatures
      case 'equipment':
        return this.state.equipment
      case 'materials':
        return this.state.materials
      case 'monsters':
        return this.state.monsters
      case 'treasure':
        return this.state.treasure
      default:
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          {/* <Route exact path='/creatures' render={() => <Creatures food={this.state.creatures.food} nonFood={this.state.creatures.nonFood}/>} />
          <Route exact path= '/equipment' render={() => <Equipment equipment={this.state.equipment}/>} />
          <Route exact path='/materials' render={() => <Materials materials={this.state.materials}/>} />
          <Route exact path='/monsters' render={() => <Monsters monsters={this.state.monsters}/>} />
          <Route exact path='/treasure' render={() => <Treasure treasure={this.state.treasure}/>} /> */}
          <Route exact path='/:category' render={({ match }) => {
            const { name, category } = match.params;
            return <Items data={this.listItems(category)}/>}
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
