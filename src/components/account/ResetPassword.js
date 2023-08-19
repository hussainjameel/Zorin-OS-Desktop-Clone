import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forms.css";
import CloseButton from "react-bootstrap/CloseButton";
import Draggable from "react-draggable";

function ResetPassword(props) {
  const { onClose } = props;
  return (
    <>
      <Draggable>
        <div className="form-container">
          <div className="header">
            <div className="d-flex justify-content-end ">
              <CloseButton variant="white" onClick={onClose} />
            </div>
          </div>

          <div className="body">
            <h4 className="text-center mt-4"> Reset Password</h4>

            <form>
              <div class="vstack col-md-5 mx-auto mt-md-5 mt-sm-2">
                <label for="exampleInputPassword1" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="vstack col-md-5 mx-auto mt-md-3 mt-sm-2">
                <label for="exampleInputPassword2" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div className="vstack col-md-5 mx-auto mt-md-3 mt-sm-2">
                <label for="exampleInputPassword3" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                />
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-primary">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default ResetPassword;
