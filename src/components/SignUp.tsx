import React from "react";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";



import { BiChevronDownCircle } from "react-icons/bi";

const SignUp: React.FC = () => {
  return (
    <section className="signup-container">
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-md-1 desc">
            <div >
              <h1 className="message">Make money driving with Bolt</h1>
            </div>
            <div className="message-2">
              <span>
                Become a Bolt driver, set your schedule and earn extra money by driving!
              </span>
            </div>
            <div className="learn-more">
              <span className="d-none d-sm-block">
                LEARN MORE
                <span>  <span>  </span>
                  <BiChevronDownCircle />
                </span>
              </span>
            </div>
          </div>
            {/* SIGN UP FORM */}
          <div className="col-md-4 order-md-2 signup-form">
            <form className="form-style">
              <div className="">
                <p className="form-heading">Become a Bolt Driver</p>
                <span>
                  If you have multiple cars or drivers{" "}
                  <a href=""><span className="info">sign up as a fleet owner.</span></a>
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email </label>
                <input
                  type="email"
                  className="form-control no-outline"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required={true}

                />
                <small id="emailHelp" className="form-text text-muted">
                  This will be your username.
                </small>
              </div>
              <div className="row">
                <label htmlFor="exampleInputEmail1">Phone</label>
                <div className="col no-outline">
                  <select name="" id="inputState" className="form-control">
                    <option value="">+342</option>
                    <option value="">+233</option>
                    <option value="">+234</option>
                  </select>
                </div>
                <div className="col">
                  <input type="text" className="form-control no-outline" placeholder="Phone" />
                </div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">City</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value=""></option>
                  <option value="kuressaare">Kuressaare</option>
                  <option value="narva">Narva</option>
                  <option value="parnu">Parnu</option>
                  <option value="poltsamaa">Poltsamaa</option>
                  <option value="rakvere">Rakvere</option>
                  <option value="sillamae">Sillamae</option>
                  <option value="tallinn">Tallinn</option>
                </select>
              </div>
              <div className="form-group form-check">
                <br />
                <input
                  type="checkbox"
                  className="form-check-input "
                  id="exampleCheck1"
                />
                <span>
                  I agree to Bolt's{" "}
                  <a href=""><span className="info">Terms of Service</span></a> and{" "}
                  <a href=""><span className="info">Privacy Policy</span></a>
                </span>
              </div>
              <button type="submit" className="cst-btn  w-100 ">
                SIGN UP AS A DRIVER
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SignUp;
