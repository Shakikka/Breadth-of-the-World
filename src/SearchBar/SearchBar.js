import { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        console.log('ploop', this.props.data)
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value})
    }

    handleSubmit = () => {
        this.props.findItem(this.state.searchTerm)
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
                    placeholder={`Search for a ${this.props.data[0].category}`}
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