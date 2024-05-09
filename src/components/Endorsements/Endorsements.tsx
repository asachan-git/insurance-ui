import React from "react";
import styled from "@emotion/styled";

import InsuranceCard from "./../InsuranceCard/InsuranceCard";
import StepComponent from "./../StepComponent/StepComponent";
import DetailsCard from "./../DetailsCard/DetailsCard";

const Endorsements: React.FC = () => {
  const EndorsementContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    height: 100%;
    box-sizing: border-box;
  `;

  return (
    <EndorsementContainer>
      <InsuranceCard />
      <StepComponent />
      <DetailsCard />
    </EndorsementContainer>
  );
};

export default Endorsements;
