import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";
import ResetPassword from "./account/ResetPassword";
import Dashboard from "./apps/Dashboard";
import Terminal from "./apps/Terminal";
import Notepad from "./apps/Notepad";
import "./Desktop.css";

function Desktop(props) {
  const [context, setContext] = React.useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  const [chosen, setChosen] = React.useState();
  const [subMenu, setSubMenu] = React.useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSignInShown, setIsSignInShown] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isResetPasswordShown, setIsResetPasswordShown] = useState(false);
  const [isDashboardShown, setIsDashboardShown] = useState(false);
  const [isTerminalShown, setIsTerminalShown] = useState(false);
  const [isNotepadShown, setIsNotepadShown] = useState(false);

  const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };

  const hideContext = (event) => {
    setContext(false);
  };

  const initMenu = (chosen) => {
    setChosen(chosen);
  };

  const handleMouseEnter = (index) => {
    setSubMenu(index === 0 && chosen === "New" ? 1 : index);
  };

  const handleMouseLeave = () => {
    setSubMenu(null);
  };

  const now = new Date();
  const options = {
    timeZone: "Asia/Karachi",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = now.toLocaleString("en-US", options);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClickSignin = (event) => {
    setIsSignInShown((current) => !current);
    setIsSignUpShown(false);
    setIsResetPasswordShown(false);
  };

  const handleClickSignup = (event) => {
    setIsSignUpShown((current) => !current);
    setIsSignInShown(false);
    setIsResetPasswordShown(false);
  };

  const handleClickResetPassword = (event) => {
    setIsResetPasswordShown((current) => !current);
    setIsSignInShown(false);
  };

  const handleClickAlreadyAccount = () => {
    setIsSignUpShown(false);
    setIsSignInShown(true);
  };

  const handleClickDashboard = (event) => {
    setIsDashboardShown((current) => !current);
  };

  const handleClickTerminal = (event) => {
    setIsTerminalShown((current) => !current);
  };

  const handleClickNotepad = (event) => {
    setIsNotepadShown((current) => !current);
  };

  return (
    <>
      <div className="desktop-bg" style={{ position: "relative" }}>
        {/* Menubar */}
        <Container fluid className="menubar">
          <Row>
            <Col xs={4} lg={6} style={{ fontWeight: "bold" }}>
              AeroDrive
            </Col>
            <Col
              xs={8}
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <img
                src={require("../assets/icons/user.png")}
                alt="user"
                className="menubar-icon mx-3"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <img
                src={require("../assets/icons/expand.png")}
                alt="expand"
                className="menubar-icon mr-4"
              />
              {formattedTime}{" "}
            </Col>
          </Row>
        </Container>

        {isDropdownOpen && (
          <div className="dropdown" onMouseLeave={closeDropdown}>
            <div className="dropdown-item" onClick={handleClickSignin}>
              Sign In
            </div>
            <div className="dropdown-item" onClick={handleClickSignup}>
              Sign Up
            </div>
            <div className="dropdown-item">Logout</div>
          </div>
        )}

        {isSignInShown && (
          <SignIn
            onClose={() => setIsSignInShown(false)}
            onReset={handleClickResetPassword}
          />
        )}

        {isSignUpShown && (
          <SignUp
            onClose={() => setIsSignUpShown(false)}
            onClickAlreadyAccount={handleClickAlreadyAccount}
          />
        )}

        {isResetPasswordShown && (
          <ResetPassword onClose={() => setIsResetPasswordShown(false)} />
        )}

        {isTerminalShown && (
          <Terminal onClose={() => setIsTerminalShown(false)} />
        )}

        {isNotepadShown && <Notepad />}

        {isDashboardShown && (
          <Dashboard onClose={() => setIsDashboardShown(false)} />
        )}

        {/* Taskbar */}
        <Container className="taskbar">
          <Row sm={12}>
            <Col>
              {" "}
              <img
                src={require("../assets/icons/apps.png")}
                alt="start"
                className="taskbar-icon"
                onClick={handleClickDashboard}
              />
            </Col>
            <Col>
              <img
                src={require("../assets/icons/filehub2.png")}
                alt="file-manager"
                className="taskbar-icon"
              />
            </Col>
            <Col>
              <img
                src={require("../assets/icons/camera12.png")}
                alt="camera"
                className="taskbar-icon"
              />
            </Col>
            <Col>
              <img
                src={require("../assets/icons/notes1.png")}
                alt="notepad"
                className="taskbar-icon"
                onClick={handleClickNotepad}
              />
            </Col>
            <Col>
              <img
                src={require("../assets/icons/cmd.png")}
                alt="terminal"
                className="taskbar-icon"
                onClick={handleClickTerminal}
              />
            </Col>
            <Col>
              <img
                src={require("../assets/icons/about.png")}
                alt="about"
                className="taskbar-icon"
              />
            </Col>
          </Row>
        </Container>

        {/* Right Click Cascading Menu */}
        <div
          className="contextContainer"
          onContextMenu={showNav}
          onClick={hideContext}
        >
          {context && (
            <div
              style={{ top: xYPosistion.y + 1, left: xYPosistion.x + 1 }}
              className="menu"
            >
              <div
                className="menuElement"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave()}
              >
                Sort by
                {subMenu === 0 && (
                  <div className="sub-menu">
                    <div className="sub-menu-item" onClick={{}}>
                      Name
                    </div>
                    <div className="sub-menu-item" onClick={{}}>
                      Type
                    </div>
                    <div className="sub-menu-item" onClick={{}}>
                      Size
                    </div>
                  </div>
                )}
              </div>
              <div
                className="menuElement"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave()}
              >
                New
                {subMenu === 1 && (
                  <div className="sub-menu">
                    <div className="sub-menu-item" onClick={{}}>
                      New Document
                    </div>

                    <div className="sub-menu-item" onClick={{}}>
                      New Folder
                    </div>
                  </div>
                )}
              </div>
              <div className="menuElement" onClick={{}}>
                Upload Here
              </div>
              <div className="menuElement" onClick={{}}>
                Change Desktop Bg
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Desktop;
