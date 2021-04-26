import { Link } from 'react-router-dom';

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
                    <button id={id} onClick={(e) => favoriteItem(e, category)}>unfavorite</button>
                </div>
            )
        })}
        </div>
    )
}

export default Favorites