import ProductList from "./components/ProductList";
import css from "./App.module.css";
import ProductSearch from "./components/ProductSearch";
function App() {
  const products = ['Mobile', "Laptop", 'Earphone', 'Tablet', 'Watch', 'Perfume', 'Jeans'];
  return (<div className={css.app}>
    <h1 className={css.heading}>Welcome To Event Handling</h1>
    <ProductSearch></ProductSearch>
    {
      products.map(product => <ProductList key={product} product={product} /> )
    }
  </div>
  )
}

export default App
