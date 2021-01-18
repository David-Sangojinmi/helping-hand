import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-4">
          <img src={slogan} alt="slogan" />
          <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light">Login</h1>
            
            <div id="formContent">
                {/* Login Form */}
                <form>
                    <input type="text" id="login" class="fadeIn second" name="username" placeholder="Username"/>
                    <input type="password" id="pass" class="fadeIn third" name="password" placeholder="Password"
                          minlength="8" required/>
                    <Link class="navbar-brand" to="/tutorial">
                      <input type="submit" class="fadeIn fourth" value="Log In"/>
                    </Link>
                    
                </form>

                {/* Remind Passowrd */}
                <div id="formFooter">
                  <a class="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
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

export default Login;
