import './HomePage.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
    
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
        </div>
    )
}

export default HomePage;