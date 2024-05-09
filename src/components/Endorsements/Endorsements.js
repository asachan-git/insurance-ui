import React from "react";
import styled from "@emotion/styled";
import InsuranceCard from "./../InsuranceCard/InsuranceCard";
import StepComponent from "./../StepComponent/StepComponent";
import DetailsCard from "./../DetailsCard/DetailsCard";
const Endorsements = () => {
    const EndorsementContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    height: 100%;
    box-sizing: border-box;
  `;
    return (React.createElement(EndorsementContainer, null,
        React.createElement(InsuranceCard, null),
        React.createElement(StepComponent, null),
        React.createElement(DetailsCard, null)));
};
export default Endorsements;
