import React from "react";
import slogan from "./slogan.svg";
import mascot from "./mascot.svg";
import { Link } from "react-router-dom";

function FinishAccountHelpee() {
  return (
    <div className="tutorial">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img src={slogan} alt="slogan" />
            <img src={mascot} alt="mascot" />
          </div>
          <div class="col-lg-7">
            <h1>Finish Sign Up</h1>
            <div id="formContent">
                {/* Login Form */}
                <form>
                    <label for="myfile">Upload a profile picture</label>
                    <input type="file" id="myfile" class="fadeIn second" name="pic" placeholder="Upload a Profile Picture"/>
                    <input type="text" id="bio" class="fadeIn second" name="bio" placeholder="Bio"/>
                    <input type="text" id="address" class="fadeIn second" name="address" placeholder="Address Line 1"/>
                    <input type="text" id="postcode" class="fadeIn second" name="postcode" placeholder="Postcode"/>
                    <input type="text" id="number" class="fadeIn second" name="number" placeholder="Phone Number"/>
                    <select id="role" name="role" multiple>
                        <option value="None Selected">What type of help do you need</option>
                        <option value="phone">Phone Call</option>
                        <option value="shop">Shopping</option>
                        <option value="shop">Dog Walking</option>
                    </select>
                    <Link class="navbar-brand" to="/helpee">
                        <input type="submit" class="fadeIn fourth" value="Complete"/>
                    </Link>
                    
                </form>
            </div>
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

export default FinishAccountHelpee;
