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

  if (foodItems.length === 0) return <ErrorMessage />;

  return (
    <div className={css.app}>
      <h1 className={css.heading}>Food List</h1>
      <Input value={item} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <List foodList={foodItems} />
    </div>
  );
}

export default App;
