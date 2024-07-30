import image from "../assets/Trip.png";
import { steps } from "../constants";
import "../css/Book.css";
const Book = () => {
  return (
    <div className="book" id="book">
      <div className="left-book">
        <h6>Eady and Fast</h6>
        <h1>Book Your Next Trip In 3 Easy Steps</h1>
        {steps.map((items, index) => (
          <div className="step-cards" key={index}>
            <div className="book-img">
              <img src={items.image} alt="" />
            </div>
            <div className="step-text">
              <h5>{items.title}</h5>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="right-book">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Book;
