import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ id, category, common_locations, cooking_effect, description, hearts_recovered, image, name, drops, attack, defense, clearFoundItems, favoriteItem }) => {
 
    return (
        <div>
            <Link to={`/${category}`}>
                <button>Back</button>
            </Link>
            <Link to={`/`}>
                <button onClick={clearFoundItems}>Home</button>
            </Link>
            <img src={image} alt=''/>
            <p>{name}</p>
            <p>{description}</p>
            {common_locations && <p>Can be found at: {common_locations.join(', ')}</p>}
            {attack !== 0 && attack && <p>Attack: {attack}</p>}
            {defense !== 0 && defense && <p>Defense: {defense}</p>}
            {drops && <p>Drops: {drops.join(', ')}</p>}
            {cooking_effect && <p>Cooking Effects: {cooking_effect}</p>}
            {hearts_recovered !== 0 && hearts_recovered && <p>Hearts Restored: {hearts_recovered}</p>}
            <button id={id} onClick={(e) => favoriteItem(e, category)}>Favorite</button>
        </div>
    )
}

export default Item;

Item.propTypes = {
    id: PropTypes.number,
    category: PropTypes.string,
    common_locations: PropTypes.array,
    cooking_effects: PropTypes.string,
    description: PropTypes.string,
    hearts_recovered: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    drops: PropTypes.array,
    attack: PropTypes.number,
    defense: PropTypes.number,
    clearFoundItems: PropTypes.func,
    favoriteItem: PropTypes.func
}