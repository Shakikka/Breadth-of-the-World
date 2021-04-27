import { Link } from 'react-router-dom';
import './Items.css';
import PropTypes from 'prop-types';
// import { GiTriforce } from "react-icons/gi";

const Items = ({ data, foundItems, favoriteItem }) => {
    if (foundItems.length) {
        data = foundItems
    }
    return (
        data.map(({ id, name, image, category }) => {
            return (
                <div key={id}>
                    <Link to={`/${category}/${id}`}>
                        <img src={image} alt='' />
                        <p>{name}</p>
                        {/* <GiTriforce/> */}
                    </Link>
                    <button id={id} onClick={(e) => favoriteItem(e, category)}>Favorite</button>
                </div>
            )
        })
    )
}

export default Items;

Items.propTypes = {
    data: PropTypes.array,
    foundItems: PropTypes.array,
    favoriteItem: PropTypes.func
}