import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <Link to='/'>
                <button>Home</button>
            </Link>
            {favorites.map(({ id, name, image, category}) => {
            return (
                <div>
                    <Link to={`/${category}/${id}`} key={id}>
                        <img src={image} alt='' />
                        <p>{name}</p>
                        {/* <GiTriforce/> */}
                    </Link>
                    <button>unfavorite</button>
                </div>
            )
        })}
        </div>
    )
}

export default Favorites