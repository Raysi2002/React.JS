import css from "./List.module.css";
import Input from "./Input"
import DeleteBtn from "./DeleteBtn";

const List = ({foodList}) => {
    return (
        <ul className="list-group">
            {
                foodList.map(item => <li key={item} id="listItem" className="list-group-item">{item} <DeleteBtn /> </li>)
            }
        </ul>
    )
}

export default List;