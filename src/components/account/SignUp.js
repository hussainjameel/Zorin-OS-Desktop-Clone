import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forms.css";
import CloseButton from "react-bootstrap/CloseButton";
import Draggable from "react-draggable";
import axios from "axios";

function SignUp(props) {
  const { onClose } = props;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleSignup = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/signup", user)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      // alert("Postsed");
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
      {console.log("User", user)}
      <Draggable>
        <div className="form-container">
          <div className="header">
            <div className="d-flex justify-content-end ">
              <CloseButton variant="white" onClick={onClose} />
            </div>
          </div>

          <div className="body">
            <h4 className="text-center mt-2"> Create Account</h4>
            <p className="text-center">
              Create an account to save your session and avoid losing your work.
            </p>
            <form>
              <div class="vstack col-md-5 mx-auto mt-md-5 mt-sm-2">
                <label for="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="vstack col-md-5 mx-auto mt-md-3 mt-sm-2">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="vstack col-md-5 mx-auto mt-md-3 mt-sm-2">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="vstack col-md-5 mx-auto mt-md-3 mt-sm-2">
                <label for="exampleInputPassword1" className="form-label">
                  ReEnter Password
                </label>
                <input
                  type="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div class="d-flex justify-content-center mt-4">
                <button
                  type="submit"
                  onClick={handleSignup}
                  className="btn btn-primary"
                >
                  CREATE
                </button>
              </div>
              <span
                class="d-flex justify-content-center mt-2"
                onClick={props.onClickAlreadyAccount}
              >
                Already have an account?
              </span>
            </form>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default SignUp;
