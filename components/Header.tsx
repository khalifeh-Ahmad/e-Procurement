import Image from 'next/image'
import Styles from '../styles/Header.module.css';
import Link from 'next/link'
import Filter from './Filter';

export default function Header() {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.container}>
                <div className={Styles.logo}>Logo</div>
                <div>
                    <Filter />
                    {/* <input type="text" value="Search products"></input> */}
                </div>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Products</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Become a Seller</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Careers</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Contact us</a></Link>
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className={Styles.container}>
                <div className={Styles.logo}>Requsitions</div>

                <ul>
                    <li>
                        <Link href="/"><a className={Styles.regBtn}>Register</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a className={Styles.button}>Login</a></Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}