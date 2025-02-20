import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";
import "./App.css"
function App() {
  const date = new Date().toLocaleDateString();

  return <center>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <DeleteTodo title = "Learn React" date = {date}/>
    <DeleteTodo title = "Master DSA" date = {date} />
  </center>
}

export default App
