import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-7">
            <br/>
            <br/>
            <br/>
            <h1>About</h1>
            <p>
              We are a team of 4 UK Computer Science students. Our idea comes from the ways we have seen people volunteer and interact within our communities, and also our perspective on how we can provide people with the right medium to help others.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
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

export default About;
