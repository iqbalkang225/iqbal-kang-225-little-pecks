import './Home.css'
import Navbar from './Navbar'

const Home = () => {
    return (
        <header className = "header">
            <Navbar />

            <div className = "header-title">
                <h1>TROY'S FAVORITE <br /> all-day café</h1>
                <p> SUNDAY-TUESDAY 8AM-3PM </p>
                <p> WEDNESDAY-SATURDAY 8AM-9PM </p>
            </div>
        </header>

    )
}

export default Home