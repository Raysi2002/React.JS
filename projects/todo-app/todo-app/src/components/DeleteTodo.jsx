function DeleteTodo() {
    return (
        <div id="content" class="container">
            <div class="row">
                <div id="text" class="col">
                    Learn React
                </div>
                <div id="date" class="col-md-auto">
                    12/1/2002</div>
                <div className="col col-lg-2">
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteTodo;