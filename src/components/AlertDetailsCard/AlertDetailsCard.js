import styled from "@emotion/styled";
import RightArrow from "./../../assets/right-arrow.svg?react";
import Button from "./../Button/Button";
const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border-radius: 8px;
  padding: 16px;
  background: #fff2f2;
  gap: 16px;
`;
const Heading = styled.div `
  font-weight: 600;
  color: #eb5757;
`;
const DetailsSection = styled.div `
  display: flex;
  flex-direction: column;

  & > p {
    margin: 12px 0;
  }
`;
const AlertDetailsCard = () => {
    return (React.createElement(Wrapper, null,
        React.createElement(DetailsSection, null,
            React.createElement(Heading, null, "3 Claims for Query!"),
            React.createElement("p", null, "Documents pending from employee")),
        React.createElement("div", null,
            React.createElement(Button, { variant: "outlined", style: {
                    border: "1px solid #025f4c",
                    borderRadius: "8px",
                    padding: "12px",
                    color: "#025f4c",
                }, iconAfter: React.createElement(RightArrow, null) }, "View Claims"))));
};
export default AlertDetailsCard;
