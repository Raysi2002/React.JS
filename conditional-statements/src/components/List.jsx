import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function List() {
    const itemList = ['Eggs', 'Carrot', 'Soya Chunks', 'Lemon'];
    return (
        <ul className="list-group">
            {
                itemList.map(item => <li className="list-group-item">item </li>)
            }
        </ul>
    );
}

export default List;
