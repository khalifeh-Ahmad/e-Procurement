import Product, { IProduct } from "./Product"
import data from '../products.json';
import Styles from './../styles/Product.module.css'
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";


interface IProductListProps {
    product: Product[]
}
export default function Main() {
    let allProd: string[];
    allProd = new Array;
    data.map((pro) => { allProd.push(pro.category) })
    //console.log(allProd)
    return (
        <>
            <div className={Styles.container} >
                <div className={Styles.main}>
                    <Sidebar productList={allProd} />

                </div>
            </div>
        </>
    )
}