import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
    return (
        <div>
            {favorites.map(({ id, name, image, category}) => {
            return (
            <Link to={`/${category}/${id}`} key={id}>
                <img src={image} alt='' />
                <p>{name}</p>
                <button>unfavorite</button>
                {/* <GiTriforce/> */}
            </Link>
            )
        })}
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Favorites