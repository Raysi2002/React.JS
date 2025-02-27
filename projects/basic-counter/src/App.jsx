import { useState } from "react"
import Header from "./component/Header";
import Counter from "./component/Counter";
import css from "./App.module.css"

function App() {
  const [count, setCount] = useState(0);
  return(
    <div className={css.container}>
      <Header></Header>
      <Counter></Counter>
    </div>
  )
}

export default App
