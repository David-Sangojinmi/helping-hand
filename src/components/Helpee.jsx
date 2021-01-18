import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";

function Helpee() {
  return (
    <div className="helpees">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-8">
            <h1>Hi!</h1>
            <p>Are you looking for a helping hand?</p>
            <br></br>
            <br></br>
            <br></br>
            <button id="login" type="button" onClick="location.href='xxxx.html'" class="btn btn-success">Make a new request</button>
            <button id="signup" type="button" onClick="location.href='match.html'" class="btn btn-primary">Check old requests</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helpee;
