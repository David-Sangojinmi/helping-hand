import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";

function Helper() {
  return (
    <div className="helpers">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-8">
            <h1>Hi helper!</h1>
            <p>View other profiles here</p>
            <br></br>
            <br></br>
            <br></br>
            <button id="login" type="button" onClick="location.href='xxxx.html'" class="btn btn-success">Perfect! Contact them now</button>
            <button id="signup" type="button" onClick="location.href='match.html'" class="btn btn-primary">Show me someone else</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helper;