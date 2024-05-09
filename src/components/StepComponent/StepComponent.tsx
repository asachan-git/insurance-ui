import styled from "@emotion/styled";

import DownloadIcon from "./../../assets/download.svg?react";
import SearchIcon from "./../../assets/search.svg?react";
import PrescriptionIcon from "./../../assets/prescription.svg?react";
import ForwardIcon from "./../../assets/forward.svg?react";
import CardIcon from "./../../assets/card.svg?react";

type StepDataProps = {
  last?: boolean;
  active: boolean;
  data?: {
    name: string;
    icon: JSX.Element;
  };
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 8px;
  padding: 0 56px;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Progress = styled.div`
  position: relative;

  & > svg {
    position: absolute;
  }
`;

const HorizontalLine = styled.hr`
  position: absolute;
  width: 100%;
  height: 1px;
  top: 45%;
  background: #cbd6d3;
  margin: 0;
  border: none;
`;

const Text = styled.p<StepDataProps>`
  paddding: 0;
  margin: 0;
  font-family: serif;
  color: ${(props) => (props.active ? "#595959" : "#7f8785")};
  font-weight: 500;
`;

const Circle = styled.div<StepDataProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  top: 0;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FDD506" : "#eeeeee")};
  z-index: 2;
`;

const StepData = [
  { name: "Data Submission", icon: <DownloadIcon /> },
  { name: "Review By Loop", icon: <SearchIcon /> },
  { name: "Data sent to insurer", icon: <ForwardIcon /> },
  { name: "UHID Generated", icon: <PrescriptionIcon /> },
  { name: "E-Cards Received", icon: <CardIcon /> },
];

const StepComponent: React.FC = () => {
  return (
    <Container>
      {StepData.map((step, index) => (
        <Step
          key={step.name}
          data={step}
          last={index === StepData.length - 1}
          active={index === 0}
        />
      ))}
    </Container>
  );
};

const Step: React.FC<StepDataProps> = ({ data, last, active }) => {
  if (!data) return null;

  return (
    <StepContainer>
      <Progress>
        <Circle active={active}>{data.icon}</Circle>
        {!last && <HorizontalLine />}
      </Progress>
      <Text active={active}>{data.name}</Text>
    </StepContainer>
  );
};

export default StepComponent;
