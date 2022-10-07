import './Footer.css'
import Logo from '../assets/footer-logo.svg'
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const [footer, footerInView] = useInView();

    return (
        <footer className = "footer">
            <h2> CONTACT US </h2>

            <img src = {Logo} className = {`${"footer-logo"} ${footerInView ? "bounce" : ''}`} ref = {footer} />

            <div className = "address-group">
                <p> VISIT </p>
                <p> 211 BROADWAY, TROY, NY, 12180 </p>
            </div>

            <div className = "address-group">
                <p> Call </p>
                <p> 518-326-3450 </p>
            </div>

            <div className = "address-group">
                <p> Follow </p>
                <p> 
                    <a href = "#"> instagram </a>
                    <a href = "#"> facebook </a>
                </p>
            </div>

            <small className = "copyright"> &copy; Copyright 2018, pecks Corporation </small> 



        </footer>
    )
}

export default Footer