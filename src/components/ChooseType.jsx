import React from "react";
import { Link } from "react-router-dom";

function ChooseType() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <br/>
            <br/>
            <br/>
            <h1>Are you a helper?</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link class="navbar-brand" to="/helper">
                <input type="submit" class="fadeIn fourth btn btn-primary" value="I want to lend a hand"/>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          <div class="col-lg-6">
            <br/>
            <br/>
            <br/>
            <h1>Or do you need help?</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link class="navbar-brand" to="/helpee">
                <input type="submit" class="fadeIn fourth btn" value="I need a helping hand"/>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseType;
