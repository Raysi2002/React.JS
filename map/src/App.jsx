function App() {

  const listItems = ['Huge Knowlegde', 'Healthy Body', 'Unlimited Money', 'Expensive Cars', 'Atomic Habits', 'Happy Family', 'Lots of Donation', 'Happy Wife', 'Happy Kids'];

  return <>
    <h1>Things to Achieve</h1>
    <ul class="list-group">
      {
        listItems.map(item => <li class="list-group-item active">{item}</li> )
      }
    </ul>
  </>
}

export default App
