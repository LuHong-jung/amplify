import React from "react";
import { Cardcreate } from '../ui-components'

const Modal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
      };
  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <Cardcreate />
            <p>{props.content}</p>  
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

const modalContent = {
    background: "white",
    padding: "10px",
    borderRadius: "3px",
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

export default Modal;
