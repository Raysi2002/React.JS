function IfElse(){
    // const food = ['Kichdi', 'Mutton', 'Banana'];
    const food = [];
    if(food.length === 0){
        return <h1>No Food Items</h1>
    }
    return (
        <>
        <h1>Food Items</h1>
        <ul>
            {
                food.map(item => <li key={item} className="list-group-item"> {item} </li>)
            }
        </ul>
        </>
    )
}

export default IfElse;