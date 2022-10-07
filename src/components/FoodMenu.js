import "./FoodMenu.css"
import menuData from '../menuData'

const FoodMenu = () => {
    return (
        <section className = "food-menu">

            <div className = "food-menu-container">

                <h2 className = "food-title"> FOOD MENU </h2>

                <div className = "food-col-left">
                    <h4 className = "col-title col-title-left"> BREAKFAST(8AM - 4PM) </h4>
                    <ul className = "food-list">
                        
                        {
                        menuData.breakfast.map((item,index) => (
                            <li key = {index} > 
                                <div className = "food-title-container">
                                    <h4> {item.title} </h4>
                                    <span className = "filler"></span>
                                    <p> ${item.price} </p>
                                </div>
                                <p> {item.desc} </p>
                            </li>
                        ))
                        }

                    </ul>
                </div>

                <div className = "food-col-right">
                    <h4 className = "col-title col-title-right"> ALL DAY (M-F 11AM-CLOSE) </h4>
                    <ul className = "food-list">
                        
                        {
                        menuData.allDay.map((item,index) => (
                            <li key = {index} > 
                                <div className = "food-title-container">
                                    <h4> {item.title} </h4>
                                    <span className = "filler"></span>
                                    <p> ${item.price} </p>
                                </div>
                                <p> {item.desc} </p>
                            </li>
                        ))
                        }
                        
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default FoodMenu