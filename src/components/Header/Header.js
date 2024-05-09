import styled from "@emotion/styled";
import Button from "./../Button/Button";
import WarningIcon from "./../../assets/warning.svg?react";
import BrandLogo from "./../../assets/brand-logo.svg?react";
const Header = ({ setOpenAlert }) => {
    const HeaderStyles = styled("div") `
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    box-shadow: 0px 2px 8px 0px #3741510f;
    width: 100%;
    z-index: 10;
    padding: 0px 5%;
    background: white;
    box-sizing: border-box;
  `;
    return (React.createElement(HeaderStyles, null,
        React.createElement(BrandLogo, null),
        React.createElement(Button, { variant: "filled", onClick: () => setOpenAlert(true), iconAfter: React.createElement(WarningIcon, null) }, "Alerts")));
};
export default Header;
