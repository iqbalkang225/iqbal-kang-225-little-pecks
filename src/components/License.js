import './License.css'
import Shake from '../assets/milkshake.png'
import Music from '../assets/music.jpg'
import Button from './Button'
import {FaSpotify} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';

const License = () => {
    const [licenseEl, licenseView] = useInView();
    const [musicEl, musicView] = useInView();

    return (
        <section className = "license">

            <div className = {`left-col ${licenseView ? "license-animate" : ''}`} ref = {licenseEl}>
                <div className = "left-col-desc">
                    <h3> LICENSED TO CHILL </h3>
                    <p> We like our days & our drinks cold. Stop by and cool off! </p>
                    <Button className = "license-btn-left"> Drink Menu</Button>
                </div>
                <img src = {Shake} className = "milkshake" />
            </div>

            <div className = {`right-col ${musicView ? "music-animate" : ''}`} ref = {musicEl}>
                <img src = {Music} className = "music" />
                <div className = "right-col-desc">
                    <h3> CATCH OUR VIBE </h3>
                    <p> Keep it groovy all day with the little pecks signature Spotify playlist!  </p>
                    <Button className = "license-btn-right"> <FaSpotify /> TUNE IN </Button>
                </div>
            </div>

        </section>

    )
}

export default License