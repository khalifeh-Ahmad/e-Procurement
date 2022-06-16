import Link from 'next/link'
// import Styles from './../styles/Header.module.css'
import './../styles/Footer.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
        <section className="footers bg-light pt-5 pb-3">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
                        <div className="footers-logo">
                            {/* <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style="width:120px;"> */}
                        </div>
                        <div className="footers-info mt-3">
                            <h5>eProcurement </h5>
                            <p>Lorem ipsum dolor in voluptatem nulla fugit iste nesciunt consectetur totam nobis officia eaque enim blanditiis quasi, amet repudiandae pariatur reiciendis quos tenetur sed.</p>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 footers-two">
                        <h5>Information </h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Become a Seller</a></li>
                            <li><a href="#">Careers</a></li>


                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 footers-three">

                        <ul className="list-unstyled">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>

                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
                        <h5>Our Contacts</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"> <i className="fas fa-contact" />+4 (509)120 6705</a></li>
                            <li><a href="#">148 Riverwood Drive, Suite</a></li>
                            <i className="fab fa-facebook-square fa-lg" />
                            <i className="fab fa-twitter-square fa-lg" />
                            <i className="fab fa-instagram fa-lg" />
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer