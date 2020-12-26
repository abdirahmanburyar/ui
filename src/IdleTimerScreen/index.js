import React, { useRef, useState } from "react";
import IdleTime from "react-idle-timer";
import { connect } from "react-redux";
import { logout } from "../redux/admin/actions";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const IdleTimerScreen = ({ logout }) => {
  const idleTimerRef = useRef(null);
  const sessionTimeRef = useRef(null);
  const [open, setOpen] = useState(false);
  const onIdleEvent = async () => {
    sessionTimeRef.current = setTimeout(logMeOut, 15000);
    setOpen(true);
    console.log("idle time");
  };
  const logMeOut = async () => {
    setOpen(false);
    await logout();
    clearTimeout(sessionTimeRef.current);
  };
  const keepMeSignIn = async () => {
    setOpen(false);
    clearTimeout(sessionTimeRef.current);
  };
  return (
    <div>
      <Modal open={open} onClose={keepMeSignIn} center>
        <h2 id="my-modal-title">Create New Foculty</h2>
        <button onClick={logMeOut}>Log me out</button>
        <button onClick={keepMeSignIn}>Keep Me Out</button>
      </Modal>
      <IdleTime
        ref={idleTimerRef}
        timeout={15 * 1000}
        onIdle={onIdleEvent}
      ></IdleTime>
    </div>
  );
};

export default connect(null, { logout })(IdleTimerScreen);
