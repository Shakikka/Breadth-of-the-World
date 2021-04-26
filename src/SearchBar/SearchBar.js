import { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }
    
    
    
    handleChange = e => {
        this.setState({ searchTerm: e.target.value })
        this.props.findItems(e, this.props.category)
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
                    <button onClick={this.props.clearFoundItems}>Home</button>
                </Link>
            </form>
        )
    }
}

export default SearchBar