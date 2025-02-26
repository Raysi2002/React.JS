import css from "./List.module.css";
import Input from "./Input"

const List = ({foodList}) => {
    return (
        <>
            <ul className="list-group">
                {
                    foodList.map(item => <li key={item} className="list-group-item">{item}</li>)
                }
            </ul>
        </>
    )
}

export default List;