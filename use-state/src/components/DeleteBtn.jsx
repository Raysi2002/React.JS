import css from "./DeleteBtn.module.css"

const DeleteBtn = ({onClick}) => {
    return (
        <button onClick={onClick} id={css.deleteBtn} className="btn btn-primary"> Delete </button>
    )
}

export default DeleteBtn;