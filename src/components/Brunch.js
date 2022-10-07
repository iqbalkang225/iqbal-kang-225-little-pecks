import "./Brunch.css"
import Juice from '../assets/juice.jpg'
import { useInView } from 'react-intersection-observer';

const Brunch = () => {
    const [brunchDesc, brunchInView] = useInView();

    return (
        <section className = "brunch">
            
            <div className = {`${"brunch-desc"} ${brunchInView ? "animate" : ''}`} ref = {brunchDesc}>
                <h4> BEST MEALS START WITH B </h4>
                <h2 className = "section-title"> 
                    <span>BRUNCH</span> <br />
                    <span> LIFE IS </span> <br />
                    <span> BAE </span> 
                </h2>
                <p> Did somebody say brunch?! No one throws a patio party like we do! Bloodys, Mimosas and your favorite brunch munchies are the name of the game. </p>
                <p> Brunch is served Saturday and Sunday 8-3, but we like to say you can have brunch any day of the week </p>
            </div>

            <div className = "brunch-img">
                <img src = {Juice} />
            </div>
        </section>
    )
}
export default Brunch