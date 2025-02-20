import PropTypes from "prop-types";

function DeleteTodo(props) {
    return (
        <div id="content" class="container">
            <div class="row">
                <div id="text" class="col">
                    {props.title}
                </div>
                <div id="date" class="col-md-auto">
                    {props.date}</div>
                <div className="col col-lg-2">
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

DeleteTodo.prototypes = {
    title: PropTypes.string,
    date: PropTypes.string
}

export default DeleteTodo;