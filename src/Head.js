import "./index.css";
import Image from "./assets/images/main-logo.png";

function App() {
  return (
    <div className="ov-item">
      <div className="overall_item">
        <div className="left_Side">
          <img src={Image} alt="Logo" />
        </div>
        <div className="right_Side">
          <div className="rm_Menu d-flex">
           <p>Log in</p>
           <p>Help</p>
          </div>
        </div>
      </div>
      <div className="txt_option">
        <div className="text_str text-center text-light">
          <h2> Trusted Matrimony & Matchmaking Service </h2>{" "}
        </div>{" "}
        <div className="drop_menu">
          <div className="drp-items">
            <label htmlFor="select" id="lab_Text">
              {" "}
              I 'm Looking for a
            </label>{" "}
            <select name="select" id="Select_item">
              <option value="Men" id="opt">
                {" "}
                Men{" "}
              </option>{" "}
              <option value="Women"> Women </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="drp-items">
            <label htmlFor="select" id="lab_Text">
              {" "}
              Age{" "}
            </label>{" "}
            <select name="select" id="Select_item">
              <option value="20"> 20 </option> <option value=""> 21 </option>
              <option value=""> 22 </option> <option value=""> 23 </option>
              <option value=""> 24 </option> <option value=""> 25 </option>
              <option value=""> 26 </option> <option value=""> 27 </option>
              <option value=""> 28 </option> <option value=""> 29 </option>
              <option value="30"> 30 </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="drp-items">
            <label htmlFor="select" id="lab_Text">
              {" "}
              Religion{" "}
            </label>{" "}
            <select name="select" id="Select_item">
              <option value="#"> Select Religion </option>{" "}
              <option value=""> Hindu </option>{" "}
              <option value=""> Muslim </option>
              <option value=""> Christian </option>{" "}
              <option value=""> Sikh </option> <option value=""> Parsi </option>
              <option value=""> Jain </option>{" "}
              <option value=""> Buddhist </option>{" "}
              <option value=""> Jewish </option>{" "}
              <option value=""> No Religion </option>{" "}
              <option value=""> Spiritual </option>{" "}
              <option value=""> Other </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="drp-items">
            <label htmlFor="select" id="lab_Text">
              {" "}
              Mother Tongue{" "}
            </label>{" "}
            <select name="select" id="Select_item">
              <option value="#"> Select Language </option>{" "}
              <option value="Tamil"> Tamil </option>{" "}
              <option value="Malayalam"> Malayalam </option>{" "}
              <option value="Telugu"> Telugu </option>{" "}
              <option value="Kannada"> Kannada </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="sub-btn">
            <button type="submit" id="btn_sb">
              {" "}
              Let 's Begin
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
