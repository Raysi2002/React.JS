import css from "./Input.module.css";

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      type="text"
      className={css.input}
      placeholder="Enter Food Item"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyPress}
    />
  );
};

export default Input;
