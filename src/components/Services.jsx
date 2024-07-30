import { services } from "../constants";
import "../css/Services.css";
import Rectangle from "../assets/Rectangle.png";
const Services = () => {
  return (
    <div className="services">
      <div className="Services-heading">
        <h6>CATEGORY</h6>
        <h1>We Offer Best Services</h1>
      </div>

      <div className="cards-container">
        {services.map((items, index) => (
          <div className="cards" key={index}>
            <div className="img-container">
              <img src={items.image} alt="" />
            </div>
            <div className="details-container">
              <h5>{items.title}</h5>
              <p>{items.text}</p>
            </div>
            <img src={Rectangle} alt="" className="rectangle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
