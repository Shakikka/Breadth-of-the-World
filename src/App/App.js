import './App.css';
import { Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Items from '../Items/Items';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import Favorites from '../Favorites/Favorites'
import { getAllHyruleInfo } from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      creatures: [],
      equipment: [],
      materials: [],
      monsters: [],
      treasure: [],
      foundItems: [],
      favorites: []
    }
  }

    componentDidMount() {
      getAllHyruleInfo()
      .then(data => {
        const info = data.data
        this.setState({ creatures: [...info.creatures.food, ...info.creatures.non_food] , equipment: info.equipment, materials: info.materials, monsters: info.monsters, treasure: info.treasure })
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

  findItems = (e, category) => {
    const foundItems = this.state[category].filter(item => item.name.includes(e.target.value))
    this.setState({ foundItems: foundItems })
  }

  favoriteItem = (e, data) => {
    const targetId = parseInt(e.target.id)
    const foundItem = data.find(item => targetId === item.id)
    this.setState({ favorites: [...this.state.favorites, foundItem]})
  }

  clearFoundItems = () => this.setState({ foundItems: '' })

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites}/>}/>
          <Route exact path='/:category' render={({ match }) => {
            const { category } = match.params;
            return (
              <div>
                <h2>{category}</h2>
                <SearchBar findItems={this.findItems} clearFoundItems={this.clearFoundItems} data={this.listItems(category)}
                 findItem={this.findItem} category={category}/>
                <Items data={this.listItems(category)} foundItems={this.state.foundItems} favoriteItem={this.favoriteItem}/>
              </div>
            )}
          } />
          <Route exact path='/:category/:id' render={({ match }) => {
            const { id, category} = match.params;
            const showItemDetails = this.listItems(category).find(item => item.id === parseInt(id))
            return <Item clearFoundItems={this.clearFoundItems} {...showItemDetails}/>}}
          />
          <Route render={() => {
              <Link to='/'>
                <h1>You must be lost. Please click here to find your way.</h1>
              </Link>
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
