import { Link } from 'react-router-dom';

const Materials = ({ materials }) => {
    return (
        materials.map(material => {
            return (
                <Link to={`/material/${material.name}`} key={material.id}>
                    <img src={material.image} alt='' />
                    <p>{material.name}</p>
                </Link>
            )
        })
    )
}

export default Materials;