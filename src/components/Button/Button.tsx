import React from "react";
import styled from "@emotion/styled";

interface ButtonStyleProps {
  variant: "outlined" | "filled";
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonProps extends ButtonStyleProps {
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children: string;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  padding: 8px 16px;
  border: ${(props: ButtonStyleProps) =>
    props.variant === "filled" ? "none" : "1px solid red"};
  background-color: ${(props: ButtonStyleProps) =>
    props.variant === "filled" ? "#FF8080" : "transparent"};
  color: ${(props: ButtonStyleProps) =>
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
    <ButtonStyle style={style} variant={variant} onClick={onClick}>
      {iconBefore && iconBefore}
      {children}
      {iconAfter && iconAfter}
    </ButtonStyle>
  );
};

export default Button;
