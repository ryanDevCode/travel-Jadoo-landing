import "../css/Subscribe.css";
import Button from "../assets/Subscribe-button.png";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <h1>Subscribe to get information, latest news and other
        interesting offers about Jadoo</h1>
        <form action="
        " method="post">
          <input type="text" placeholder="Your Email"/>
          <a href="">
            <img src={Button} alt="" />
          </a>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
