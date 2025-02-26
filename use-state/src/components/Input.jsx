import css from "./Input.module.css";

const Input = () => {
    return(
        <input type="text" className={css.input} placeholder="Enter Food Item"/>
    )
}

export default Input;