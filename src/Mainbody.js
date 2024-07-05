import "./index.css";
import Rightlogo from "./assets/images/vip_logo.webp";

function Mainbody() {
  return (
    <div className="main-body">
      <div className="m-Id" id="d-flex">
        <div className="main-body-left w-70 rbottom">
          <h2>Exclusive & Personalised Matchmaking by Shaadi.com</h2>
          <div className="cl-list">
            <ul>
                <li>Top Rated Consultants</li>
                <li>5 times higher success rates</li>
                <li>100 % Privacy</li>
            </ul>
          </div>
        </div>
        <div className="main-body-right text-light w-30">
          <img src={Rightlogo} alt="" />
          <button>Get Invited</button>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
