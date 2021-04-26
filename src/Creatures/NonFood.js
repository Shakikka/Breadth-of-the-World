import { Link } from 'react-router-dom'

const NonFood = ({nonFood}) => {
    return (
        nonFood.map(creature => {
            return (
                <Link to={`/creature/${creature.name}`} key={creature.id}>
                    <img src={creature.image} alt='' />
                    <p>{creature.name}</p>
                </Link>
            )
        })
    )
}

export default NonFood;