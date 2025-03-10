import ErrorMessage from "./components/ErrorMessage";
import List from "./components/List";
import Input from "./components/Input";
import css from "./App.module.css";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState(["Carrot", "Paneer", "Mutton", "Fish"]);
  const [item, setItem] = useState("");

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && item.trim() !== "") {
      setFoodItems([...foodItems, item]); // Add new item
      setItem(""); // Clear input
    }
  };

  const handleDelete = (itemToDelete) => {
    setFoodItems(foodItems.filter(item => item !== itemToDelete))
  }



  return (
    <div className={css.app}>
      <h1 className={css.heading}>Food List</h1>
      <Input value={item} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      {
        foodItems.length == 0 ? <ErrorMessage /> : <List foodList={foodItems} onDelete={handleDelete} />
      }
    </div>
  );
}

export default App;
