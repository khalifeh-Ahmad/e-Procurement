//import Product, { IProduct } from "./Product";

import ProductList from './ProductList';

const Sidebar = (productList: any) => {
    
    //console.log(productList)
    return (
        <>
            <main>
                <div>
                    <h4>Filter by Category</h4>
                    {
                        productList.productList.filter((n, i) => productList.productList.indexOf(n) === i).map(
                            (val) =>
                                <div> <input type="checkbox" onChange={handleChange} value={val} /><span>{val}</span></div>)
                    }</div>
            </main>
            <ProductList />
        </>
    )
}

const handleChange = (elem) => {
    //alert(13)
    
}

export default Sidebar