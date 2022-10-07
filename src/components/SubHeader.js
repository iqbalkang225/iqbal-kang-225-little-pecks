import Button from './Button'
import './SubHeader.css'
import Image from '../assets/offering.jpg'
import { useInView } from 'react-intersection-observer';

const SubHeader = () => {
    const [subheaderDesc, descInView] = useInView();
    const [subheaderImg, imgInView] = useInView();

    return (
        <section className = "subheader">

            <div className = {`${"subheader-desc"} ${descInView ? "animate" : ''}`} ref = {subheaderDesc}>
                <h2 className = "section-title"> 
                    <span>Eat,</span> 
                    <span> Drink</span> <br />
                    <span>Work,</span> 
                    <span> Play</span> 
                </h2>

                <p className = "subheader-text">
                Little Pecks is a neighborhood all-day café with a passion for tasty bites and quality beans. We're also the perfect place to meet up with friends, take care of business, or just kick back and relax!
                </p>

                <Button className = "subheader-btn"> order online </Button>

            </div>

            <div className = "subheader-img" >
                <img src = {Image} className = {descInView ? "animate" : ''} ref = {subheaderImg} />
            </div>

        </section>
    )
}

export default SubHeader