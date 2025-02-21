import Display from "./components/Display"
import css from "./App.module.css"

function App() {
  return(<div className={css.calculatorApp}>
    <h1>Calculator App</h1>
    <Display></Display>
  </div>)
}

export default App
