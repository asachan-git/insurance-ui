import styled from "@emotion/styled";

import RightArrow from "./../../assets/right-arrow.svg?react";
import Button from "./../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border-radius: 8px;
  padding: 16px;
  background: #fff2f2;
  gap: 16px;
`;

const Heading = styled.div`
  font-weight: 600;
  color: #eb5757;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    margin: 12px 0;
  }
`;

const AlertDetailsCard: React.FC = () => {
  return (
    <Wrapper>
      <DetailsSection>
        <Heading>3 Claims for Query!</Heading>
        <p>Documents pending from employee</p>
      </DetailsSection>
      <div>
        <Button
          variant="outlined"
          style={{
            border: "1px solid #025f4c",
            borderRadius: "8px",
            padding: "12px",
            color: "#025f4c",
          }}
          iconAfter={<RightArrow />}
        >
          View Claims
        </Button>
      </div>
    </Wrapper>
  );
};

export default AlertDetailsCard;
