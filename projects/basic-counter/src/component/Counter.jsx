import { useState } from "react";
import css from './Counter.module.css';
const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div className={css.container}>
            <p className={css.count}>Count : {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increament</button>
        </div>
    )
}

export default Counter;