import { Link } from 'react-router-dom';
import './Items.css'
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
                    <button id={id} onClick={(e) => favoriteItem(e, data)}>Favorite</button>
                </div>
            )
        })
    )
}

export default Items;