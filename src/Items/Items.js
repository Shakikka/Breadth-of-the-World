import { Link } from 'react-router-dom';
import './Items.css'

const Items = ({ data}) => {
    return (
        data.map(({ id, name, image, category }) => {
            return (
                <Link to={`/${category}/${id}`} key={id}>
                    <img src={image} alt='' />
                    <p>{name}</p>
                </Link>
            )
        })
    )
}

export default Items;