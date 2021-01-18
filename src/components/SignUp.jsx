import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light">Sign Up</h1>
            
            <div id="formContent">
              {/* Login Form */}
              <form>
                  <input type="text" id="login" class="fadeIn second" name="name" placeholder="Fullname"/><br/>
                  <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username"/><br/>
                  <input type="email" id="email" class="fadeIn second" name="email" placeholder="Email Address"/><br/>
                  <input type="email" id="email" class="fadeIn second" name="confirm email" placeholder="Confirm Email Address"/><br/>
                  <input type="password" id="pass" class="fadeIn third" name="password" placeholder="Password (8 characters minimum)"
                        minlength="8" required/><br/>
                  <input type="password" id="pass" class="fadeIn third" name="confirm password" placeholder="Confirm Password"
                        minlength="8" required/><br/>
                  <select id="role" name="role">
                      <option value="None Selected">Choose your role</option>
                      <option value="Helper">Helper</option>
                      <option value="Helpee">Helpee</option>
                  </select><br/>
                  <Link class="navbar-brand" to="/login">
                    <input type="submit" class="fadeIn fourth" value="Get Started"/>
                  </Link>
              </form>

              {/* Remind Passowrd */}
              <div id="formFooter">
                  <a class="underlineHover" href="#">Already have an account? Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
