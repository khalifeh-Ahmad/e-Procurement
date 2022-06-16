import Image from 'next/image'
import styles from '../styles/Product.module.css';
import '@fortawesome/fontawesome-free/css/all.css';


export interface IProduct {
    id: number
    product_title: string
    category: string
    brand: string
    image_url: string
    part_number: string
    price: number
}

interface IProductProps {
    product: IProduct
}
const Product = (props: IProductProps) => {
    return (
        <div className={styles.product}>


            <div>
                <Image src={props.product.image_url} alt={props.product.product_title} width="200" height="200" />
            </div>
            <h2 className={styles.product__title}>{props.product.product_title}</h2>
            <p className={styles.product__description}>{props.product.category}</p>
            <div className="product__price-button-container">
                <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                {
                    <button
                        className={`snipcart-add-item ${styles.product__button}`}
                        data-item-id={props.product.id}
                        data-item-name={props.product.product_title}
                        data-item-price={props.product.price}
                        data-item-url={props.product.image_url}
                    >
                        <i className="fa fa-shopping-cart"></i>
                        {/* add to cart */}
                    </button>

                }
                <button className={styles.button}>Requisition</button>
                <p>Part Number: {props.product.part_number}</p>
                <p>Category: {props.product.category}</p>

            </div>
        </div>
    )
}

export default Product