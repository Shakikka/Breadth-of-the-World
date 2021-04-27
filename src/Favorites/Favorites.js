import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, favoriteItem }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <Link to='/'>
                <button>Home</button>
            </Link>
            {favorites.map(({ id, name, image, category}) => {
            return (
                <div key={id}>
                    <Link to={`/${category}/${id}`}>
                        <img src={image} alt='' />
                        <p>{name}</p>
                    </Link>
                    <button className='unfav-btn' id={id} onClick={(e) => favoriteItem(e, category)}>unfavorite</button>
                </div>
            )
        })}
        </div>
    )
}

export default Favorites

Favorites.propTypes = {
    favorites: PropTypes.array,
    favoriteItem: PropTypes.func
}