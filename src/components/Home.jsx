import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-8">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Welcome to</h3><h1>Helping Hand!</h1>
            <p>
              Make an account as a helper or helpee.
            </p>
            <p>
              Helpers are those of you willing to perform specific tasks for helpees, that can range from simple tasks like a phone call, to grocery shopping, or even just spending some time with them virtually.
            </p>
            <ol>
              <li>Helpees are those of you that require services due to being less physically able, or in need of help due to negative impacts from the Covid-19 pandemic.</li>
              <li> Then, there is a system that matches helpers to helpees and allows people that can provide the right services to be matched to people looking for them.</li>
            </ol>
            <br/>
            <br/>
            <br/>
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

export default Home;