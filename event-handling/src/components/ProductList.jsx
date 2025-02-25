import css from "./ProductList.module.css"

const buyBtnClick = (product) => {
    console.log(`${product} is clicked to buy`);
}

const ProductList = ({ product }) => {
    return (
        <ul className="list-group">
            <li  className="list-group-item">{product} <button onClick={(e) => buyBtnClick(product)} id={css.buyButton} className="btn btn-primary">Buy</button></li>
        </ul>
    )
}

export default ProductList;