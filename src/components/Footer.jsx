import "../css/Footer.css";
import outbound from "../assets/Outbound.png"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="div1">
          <p className="footer-company">Jadoo.</p>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="company">
          <h5>Company</h5>
          <p>
            {" "}
            <a href="#">About</a>
          </p>
          <p>
            {" "}
            <a href="#">Careers</a>
          </p>
          <p>
            {" "}
            <a href="#">Mobile</a>
          </p>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <p>
            {" "}
            <a href="#">Help/FAQ</a>
          </p>
          <p>
            {" "}
            <a href="#">Press</a>
          </p>
          <p>
            {" "}
            <a href="#">Affiliate</a>
          </p>
        </div>
        <div className="More">
          <h5>More</h5>
          <p>
            {" "}
            <a href="#">Airlinefees</a>
          </p>
          <p>
            {" "}
            <a href="#">Press</a>
          </p>
          <p>
            {" "}
            <a href="#">Affiliates</a>
          </p>
        </div>
        <div className="outbound">
            <img src={outbound} alt="" />
        </div>
      </div>
      <p className="rights">All rights reserved@jadoo.com</p>
    </>
  );
};

export default Footer;
