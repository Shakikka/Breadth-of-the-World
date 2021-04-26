import { Link } from 'react-router-dom';

const Item = ({ category, common_locations, cooking_effect, description, hearts_recovered, image, name, drops, attack, defense,  }) => {
    return (
        <div>
            <Link to={`/${category}`}>
                <button>Back</button>
            </Link>
            <img src={image} alt=''/>
            <p>{name}</p>
            <p>{description}</p>
            <p>Can be found at: {common_locations}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Drops: {drops}</p>
            <p>Cooking Effects: {cooking_effect}</p>
            <p>Hearts Restored: {hearts_recovered}</p>

        </div>
    )
}

export default Item;