import css from "./DeleteBtn.module.css"

const DeleteBtn = () => {
    return (
        <button id={css.deleteBtn} className="btn btn-primary"> Delete </button>
    )
}

export default DeleteBtn;