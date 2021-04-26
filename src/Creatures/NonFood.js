const NonFood = ({nonFood}) => {
    return (
        nonFood.map(creature => {
            return (
                <div key={creature.id}>
                    <img src={creature.image} />
                    <p>{creature.name}</p>
                </div>
            )
        })
    )
}

export default NonFood;