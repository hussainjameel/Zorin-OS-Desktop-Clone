import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseButton from "react-bootstrap/CloseButton";
import "./Dashboard.css";
import Draggable from "react-draggable";

function Dashboard(props) {
  const { onClose } = props;

  return (
    <>
      <Draggable>
        <div className="dashboard-container p-4">
          <div className="d-flex justify-content-end ">
            <CloseButton variant="black" onClick={onClose} />
          </div>

          <form class="form-inline d-flex justify-content-center md-form">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input
              class="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="my-5">
            <h6> All Apps </h6>
            <div className="row m-3">
              <div className="col-3 text-center  small">
                <img
                  src={require("../../assets/icons/start.png")}
                  alt="start"
                  className="taskbar-icon"
                />
                <div>Dashboard</div>
              </div>
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/file-manager.png")}
                  alt="file-manager"
                  className="taskbar-icon"
                />
                <div>File Manager</div>
              </div>
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/notepad.png")}
                  alt="notepad"
                  className="taskbar-icon"
                />
                <div>Notepad</div>
              </div>
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/terminal.png")}
                  alt="terminal"
                  className="taskbar-icon"
                />
                <div>Terminal</div>
              </div>
            </div>

            <div className="row m-3">
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/calculator.png")}
                  alt="calculator"
                  className="taskbar-icon"
                />
                <div>Calculator</div>
              </div>
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/camera.png")}
                  alt="camera"
                  className="taskbar-icon"
                />
                <div>Camera</div>
              </div>
              <div className="col-3 text-center small">
                <img
                  src={require("../../assets/icons/about.png")}
                  alt="about"
                  className="taskbar-icon"
                />
                <div>About</div>
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div className="text-center">
            <img
              src={require("../../assets/icons/power.png")}
              alt="user"
              className="db-icons mx-3"
            />
            <span className=""> Sign Up or Login to save session.</span>
          </div>
          <hr></hr>
        </div>
      </Draggable>
    </>
  );
}

export default Dashboard;
