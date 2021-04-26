import { Link } from 'react-router-dom';

const Item = ({ category, common_locations, cooking_effect, description, hearts_recovered, image, name, drops, attack, defense,  }) => {
        console.log('hearts', hearts_recovered)
    return (
        <div>
            <Link to={`/${category}`}>
                <button>Back</button>
            </Link>
            <img src={image} alt=''/>
            <p>{name}</p>
            <p>{description}</p>
            <p>Can be found at: {common_locations}</p>
            {category === 'equipment' && <div><p>Attack: {attack}</p><p>Defense: {defense}</p></div>}
            {drops && <p>Drops: {drops}</p>}
            {cooking_effect && <p>Cooking Effects: {cooking_effect}</p>}
            {hearts_recovered !== 0 && hearts_recovered && <p>Hearts Restored: {hearts_recovered}</p>}
        </div>
    )
}

export default Item;