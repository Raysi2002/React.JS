import Employee from "./components/Employee"


function App() {
  return(
    <center>
    <h1>Props</h1>
    <Employee empName = "Aashish" age = {22} salary = {0} />
    <Employee empName = "Bob" age = {25} salary = {100000} />
    <Employee empName = "ALice" age = {21} salary = {1000} />
    </center>
  )
}

export default App
