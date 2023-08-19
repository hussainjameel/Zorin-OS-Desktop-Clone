import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forms.css";
import CloseButton from "react-bootstrap/CloseButton";
import Draggable from "react-draggable";

function SignIn(props) {
  const { onClose } = props;
  const { onReset } = props;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(name, value);
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
            <h4 className="text-center my-5"> LOGIN</h4>
            <form>
              <div class="vstack col-md-5 mx-auto mt-5">
                <label for="exampleInputEmail1" className="form-label">
                  Email or Username
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="vstack col-md-5 mx-auto mt-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
              </div>
              <span
                class="d-flex justify-content-center mt-5"
                onClick={onReset}
              >
                Forgot Password?
              </span>
            </form>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default SignIn;
