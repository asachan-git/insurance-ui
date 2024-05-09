import React from "react";
import styled from "@emotion/styled";
import AlertIcon from "./../../assets/alert.svg?react";
import CloseIcon from "./../../assets/close.svg?react";
const ModalWrapper = styled.div `
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-400px")};
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: right 2.5s ease-in-out;
  z-index: 20;
  min-width: 300px;
`;
const Backdrop = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 20;
`;
const ModalHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 8px 0px #3741510f;
  padding: 12px 16px;

  & > div {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 8px;
    }
  }
`;
const ModalBody = styled.div `
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;
// The data for number of alerts to be passed when needed
//
const SideModal = ({ setOpenAlert, openAlert, children, }) => {
    const handleClose = () => {
        setOpenAlert(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Backdrop, { isOpen: openAlert, onClick: handleClose }),
        React.createElement(ModalWrapper, { isOpen: openAlert },
            React.createElement(ModalHeader, null,
                React.createElement("div", null,
                    React.createElement(AlertIcon, null),
                    React.createElement("p", null, "02 Alerts")),
                React.createElement("div", null,
                    React.createElement(CloseIcon, { onClick: handleClose }))),
            React.createElement(ModalBody, null, children))));
};
export default SideModal;
