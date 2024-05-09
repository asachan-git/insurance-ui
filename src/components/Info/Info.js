import styled from "@emotion/styled";
import InfoIcon from "./../../assets/info-icon.svg?react";
const Container = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    font-weigt: 400;
    font-size: 12px;
    letter-spacing: 1.1;
  }
`;
const Info = () => {
    return (React.createElement(Container, null,
        React.createElement(InfoIcon, null),
        React.createElement("span", null, "All values are estimated figures, actual figures may slightly vary.")));
};
export default Info;
