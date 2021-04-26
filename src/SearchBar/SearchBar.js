import { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        console.log(this.props.category)
    }
    
    
    
    handleChange = e => {
        this.props.findItems(this.state.searchTerm, this.props.category)
        this.setState({ searchTerm: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.clearInput()
    }

    clearInput = () => {
        this.setState({ searchTerm: '' })
    }

    render() {
        return (
            <form>
                <input 
                    className='search'
                    type='text'
                    placeholder={`Search for ${this.props.category}`}
                    id='searchTerm'
                    name='searchTerm'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Search</button>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </form>
        )
    }
}

export default SearchBar