import './App.css';
import { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import { checkResponse } from '../apiCalls.js';
import Items from '../Items/Items';
import Item from '../Item/Item';

class App extends Component {
  constructor() {
    super()
    this.state = {
      creatures: [],
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
        this.setState({ creatures: [...info.creatures.food, ...info.creatures.non_food] , equipment: info.equipment, materials: info.materials, monsters: info.monsters, treasure: info.treasure })
        console.log(info)
      })
      .catch(error => alert(error))
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
  
  showItemDetails = (id, category) => listItems(category).find(item => item.id === parseInt(id))
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route exact path='/:category' render={({ match }) => {
            const { category } = match.params;
            return <Items data={this.listItems(category)}/>}
          } />
          <Route exact path='/:category/:id' render={({ match }) => {
            const { id, category} = match.params;
            return <Item {...this.showItemDetails(id, category)}/>}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
