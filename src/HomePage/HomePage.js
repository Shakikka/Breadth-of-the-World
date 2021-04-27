import './HomePage.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
    
    return (
        <div>
            <header>
            <h1>Breadth of the World</h1>
            </header>
            <div>
                <Link to={'/creatures'}>
                    <button className='crtr-btn'>Creatures</button>
                </Link>
                <Link to={'/equipment'}>
                <button className='eq-btn'>Equipment</button>
                </Link>
                <Link to={'/materials'}>
                    <button className='mat-btn'>Materials</button>
                </Link>
                <Link to={'/monsters'}>
                    <button className='mon-btn'>Monsters</button>
                </Link>
                <Link to={'/treasure'}>
                    <button className='trsr-btn'>Treasure</button>
                </Link>
                <Link to={'/favorites'}>
                    <button className='fv-btn'>Favorites</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;