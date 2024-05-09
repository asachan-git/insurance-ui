import React from "react";
import styled from "@emotion/styled";

import Button from "./../Button/Button";

import companyImage from "./../../assets/digit.png";
import DownloadIcon from "./../../assets/download.svg?react";

interface InsuranceStyleProps {
  style?: React.CSSProperties | undefined;
}

interface InsuranceCardProps extends InsuranceStyleProps {
  type?: "minimal" | "complete";
}

const InsuranceCardContainer = styled.div<InsuranceStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 56px;

  ${(props) =>
    props.style &&
    `
  ${props.style}
`}
`;

const InsuranceCardDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;

  & > img {
    border-radius: 8px;
  }
`;

const InsuranceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  color: #595959;

  & > h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
  }

  & > div {
    font-weight: 400;
    font-size: 14px;
  }
`;

const Dot = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: lightgray;
  margin: 0 8px;
`;

const insuranceDetails = [
  {
    id: 1,
    insuranceCompanyImage: companyImage,
    insuranceName: "Group Medical Insurance",
    companyName: "Go Digit",
    policyName: "Loop GMC Policy",
    policyNo: "XYZ-576-758-0090",
  },
];

const InsuranceCard: React.FC<InsuranceCardProps> = ({
  type = "complete",
  style = {},
}) => {
  return (
    <InsuranceCardContainer style={style}>
      {insuranceDetails.map((insuranceDetail, index) => (
        <React.Fragment key={insuranceDetail.id ?? index}>
          <InsuranceCardDetails>
            <img
              src={insuranceDetail.insuranceCompanyImage}
              alt="company"
              height="48px"
              width="48px"
            />
            <InsuranceCardContent>
              <h4>{insuranceDetail.insuranceName}</h4>
              <div>
                {insuranceDetail.companyName}{" "}
                {type === "complete" && (
                  <>
                    <Dot />
                    {insuranceDetail.policyName}
                    <Dot /> {insuranceDetail.policyNo}
                  </>
                )}
              </div>
            </InsuranceCardContent>
          </InsuranceCardDetails>
          {type === "complete" ? (
            <Button
              style={{
                border: "1px solid #025f4c",
                borderRadius: "8px",
                color: "#025f4c",
                padding: "14px 24px",
              }}
              variant="outlined"
              iconBefore={<DownloadIcon />}
            >
              Download member list
            </Button>
          ) : null}
        </React.Fragment>
      ))}
    </InsuranceCardContainer>
  );
};

export default InsuranceCard;
