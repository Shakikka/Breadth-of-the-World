import Food from './Food';
import NonFood from './NonFood'

const Creatures = ({food, nonFood}) => {
    return (
        <div>
            <Food food={food}/>
            <NonFood nonFood={nonFood} alt=''/>
        </div>
    )
}

export default Creatures