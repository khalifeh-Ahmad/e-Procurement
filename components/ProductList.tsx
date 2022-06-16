import Product, { IProduct } from "./Product";
import data from '../products.json';


interface IProductListProps {
    product: IProduct[]
}

const ProductList = (props: IProductListProps, searchTerm: string) => {

    return (

        <>
            {
                data.filter((val) => {

                    if (Object.keys(searchTerm).length == 0)
                        return val

                    if (val.product_title == searchTerm) {
                        return val
                    }
                }).map((product, index) =>
                    <Product product={product} key={index} />

                )
            }
        </>
    )
}


export default ProductList