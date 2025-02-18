function App() {
  const itemList = ['Eggs', 'Carrot', 'Soya Chunks', 'Lemon'];
  return (
    <>
      <h1>Conditional Statements</h1>
      <ul className="list-group">
            {
                itemList.map(item => <li key={item} className="list-group-item">{item}</li>)
            }
        </ul>
    </>
  )
}

export default App
