import Food from './Food';
import NonFood from './NonFood'

const Creatures = ({food, nonFood}) => {
    return (
        <div>
            <Food food={food}/>
            <NonFood nonFood={nonFood}/>
        </div>
    )
}

export default Creatures