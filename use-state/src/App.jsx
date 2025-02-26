import ErrorMessage from "./components/ErrorMessage"
import List from "./components/List"
import Input from "./components/Input";
import css from './App.module.css';

function App() {

  const foodItems = ["Carrot", "Paneer", "Mutton", "Fish"];

  if (foodItems.length == 0)
    return (
      <ErrorMessage />
    )

  return (
    <div className={css.app}>
      <h1 className={css.heading}>Food List</h1>
      <Input />
      <List foodItems={foodItems}/>
    </div>
  );
}

export default App
