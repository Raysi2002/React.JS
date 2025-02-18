function Ternary(){
    const stationary = ["pen", 'pencil', 'book', 'anusasan'];
    // const stationary = [];
    return(
        <>
        <h1>Ternary Operator</h1>
            {
                stationary.length == 0 ? <h1>No Items Availabe</h1> : null
            }
            <ul>
                {
                    stationary.map(item => <li key={item} className="list-group-item">{item}</li>)
                }
            </ul>
        </>
    )
}

export default Ternary;