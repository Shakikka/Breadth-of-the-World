import { Link } from 'react-router-dom';

const Item = ({ category, common_locations, cooking_effect, description, hearts_recovered, image, name, drops, attack, defense,  }) => {
    console.log(image)
    return (
        <div>
            <Link to={`/${category}`}>
                <button>Back</button>
            </Link>
            <Link to={`/`}>
                <button>Home</button>
            </Link>
            <img src={image} alt=''/>
            <p>{name}</p>
            <p>{description}</p>
            {common_locations && <p>Can be found at: {common_locations}</p>}
            {attack !== 0 && attack && <p>Attack: {attack}</p>}
            {defense !== 0 && defense && <p>Defense: {defense}</p>}
            {drops && <p>Drops: {drops}</p>}
            {cooking_effect && <p>Cooking Effects: {cooking_effect}</p>}
            {hearts_recovered !== 0 && hearts_recovered && <p>Hearts Restored: {hearts_recovered}</p>}
        </div>
    )
}

export default Item;