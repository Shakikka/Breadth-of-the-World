const Food = ({food}) => {
    return (
        food.map(creature => {
            return (
                <div key={creature.id}>
                    <img src={creature.image} alt=''/>
                    <p>{creature.name}</p>
                </div>
            )
        })
    )
}

export default Food