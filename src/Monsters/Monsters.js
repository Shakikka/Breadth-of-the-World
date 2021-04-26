import { Link } from 'react-router-dom';

const Monsters = ({ monsters }) => {
    console.log(monsters)
    return (
        monsters.map(monster => {
           return  (
                <Link to={`/monsters/${monster.name}`} key={monster.id}>
                    <img src={monster.image} alt=''/>
                    <p>{monster.name}</p>
                </Link>
            )
        })
    )
}

export default Monsters