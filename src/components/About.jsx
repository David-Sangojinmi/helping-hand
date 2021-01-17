import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              We are a team of 4 UK Computer Science students. Our idea comes from the ways we have seen people volunteer and interact within our communities, and also our perspective on how we can provide people with the right medium to help others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
