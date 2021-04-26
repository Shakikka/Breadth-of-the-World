import { Link } from 'react-router-dom';
import './Items.css'
// import { GiTriforce } from "react-icons/gi";

const Items = ({ data}) => {
    return (
        data.map(({ id, name, image, category }) => {
            return (
                <Link to={`/${category}/${id}`} key={id}>
                    <img src={image} alt='' />
                    <p>{name}</p>
                    {/* <GiTriforce/> */}
                </Link>
            )
        })
    )
}

export default Items;