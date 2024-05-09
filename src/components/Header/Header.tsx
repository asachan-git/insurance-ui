import styled from "@emotion/styled";

import Button from "./../Button/Button";

import WarningIcon from "./../../assets/warning.svg?react";
import BrandLogo from "./../../assets/brand-logo.svg?react";

type HeaderProps = {
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setOpenAlert }): JSX.Element => {
  const HeaderStyles = styled("div")`
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

  return (
    <HeaderStyles>
      <BrandLogo />
      <Button
        variant="filled"
        onClick={() => setOpenAlert(true)}
        iconAfter={<WarningIcon />}
      >
        Alerts
      </Button>
    </HeaderStyles>
  );
};

export default Header;
