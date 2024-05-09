import React from "react";
import styled from "@emotion/styled";
const ButtonStyle = styled.button `
  padding: 8px 16px;
  border: ${(props) => props.variant === "filled" ? "none" : "1px solid red"};
  background-color: ${(props) => props.variant === "filled" ? "#FF8080" : "transparent"};
  color: ${(props) => props.variant === "filled" ? "#fff" : "#333"};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(props) => props.style &&
    `
  ${props.style}
`}
`;
const Button = ({ variant = "filled", iconBefore, iconAfter, style = {}, children, onClick = () => { }, }) => {
    return (React.createElement(ButtonStyle, { style: style, variant: variant, onClick: onClick },
        iconBefore && iconBefore,
        children,
        iconAfter && iconAfter));
};
export default Button;
