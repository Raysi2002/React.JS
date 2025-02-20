import css from "./App.module.css";

function App() {
  const buttons = ["AC", "/", "*", "X", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", ".", "0", "%", "="];
  return (
    <div className={css.calculatorApp}>
      <h1 className={css.heading}>Calculator App</h1>
      <div className={css.inputArea}>
        <input type="text" name="display" id={css.display} />
      </div>
      <div className={css.calciApp}>
        {
          buttons.map(button => <input key = {button} type="button" value={button} className = {css.button} />)
        }
      </div>
    </div>
  )
}

export default App
