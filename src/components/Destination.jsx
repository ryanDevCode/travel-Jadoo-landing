import { destinations } from "../constants"
import "../css/Destination.css"
import navigation from "../assets/Navigation.png"
const Destination = () => {
  return (
    <div className="destination" id="destination">
        <div className="destination-heading">
            <h6>Top Selling</h6>
            <h1>Top Destinations</h1>
        </div>
      <div className="card-container">
        {destinations.map((items, index) =>(
            <div className="destination-cards" key={index}>
                <div className="img-containers">
                    <img src={items.img} alt="location image" />
                </div>
                <div className="info">
                    <div className="title">
                        <p>{items.location}</p>
                        <p>{items.price}</p>
                    </div>
                    <div className="days">
                        <p><span><img src={navigation} alt="" /></span>  {items.days}</p>
                    </div>
                </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Destination
