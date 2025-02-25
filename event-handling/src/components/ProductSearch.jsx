import css from "./ProductSearch.module.css";

const onChangeEvent = (e) => {
    console.log(e.target.value);
}

const ProductSearch = () => {

    return(
        <input onChange={(e) => onChangeEvent(e)} className={css.searchBtn} type="text" />
    )
}

export default ProductSearch;