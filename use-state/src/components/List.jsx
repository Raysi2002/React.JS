import css from "./List.module.css";
import Input from "./Input"
import DeleteBtn from "./DeleteBtn";


const List = ({foodList, handleClick, onDelete}) => {
    return (
        <ul className="list-group">
            {
                foodList.map(item => <li onClick={() => handleClick}  key={item} id="listItem" className="list-group-item">{item} <DeleteBtn onClick = {() => onDelete(item)} /> </li>)
            }
        </ul>
    )
}

export default List;