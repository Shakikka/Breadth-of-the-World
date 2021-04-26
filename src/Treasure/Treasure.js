import { Link } from 'react-router-dom';

const Treasure = ({ treasure }) => {
    console.log(treasure)
    return (
        treasure.map(treasure => {
            return (
                <Link to={`/treasure/${treasure.name}`} key={treasure.id}>
                    <img src={treasure.image} alt='' />
                    <p>{treasure.name}</p>
                </Link>
            )
        })
    )
}

export default Treasure