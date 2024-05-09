import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  variant: "outlined" | "filled";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ButtonStyled = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: ${(props: ButtonProps) =>
    props.variant === "filled" ? "none" : "1px solid red"};
  background-color: ${(props: ButtonProps) =>
    props.variant === "filled" ? "#FF8080" : "transparent"};
  color: ${(props: ButtonProps) =>
    props.variant === "filled" ? "#fff" : "#333"};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(props) =>
    props.style &&
    `
  ${props.style}
`}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  iconBefore,
  iconAfter,
  style = {},
  children,
  onClick = () => {},
}) => {
  return (
    <ButtonStyled style={style} variant={variant} onClick={onClick}>
      {iconBefore && iconBefore}
      {children}
      {iconAfter && iconAfter}
    </ButtonStyled>
  );
};

export default Button;
