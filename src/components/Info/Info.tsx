import styled from "@emotion/styled";

import InfoIcon from "./../../assets/info-icon.svg?react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    font-weigt: 400;
    font-size: 12px;
    letter-spacing: 1.1;
  }
`;

const Info: React.FC = () => {
  return (
    <Container>
      <InfoIcon />
      <span>
        All values are estimated figures, actual figures may slightly vary.
      </span>
    </Container>
  );
};

export default Info;
