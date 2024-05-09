import { useState } from "react";

import styled from "@emotion/styled";

type SidebarOptionProps = {
  active: boolean;
};

interface SidebarOption {
  title: string;
  icon: JSX.Element;
}

interface SidebarProps {
  sidebarOptions: SidebarOption[];
  selectedSidebarOption: string;
  setSelectedSidebarOption: (option: string) => void;
}

const SidebarStyles = styled.div`
  background: #025f4c;
  width: 15%;
  z-index: 0;
  min-width: 200px;
  height: 100%;

  @media (max-width: 1020px) {
    width: 10%;
    min-width: 60px;
  }
`;

const SidebarOptionStyles = styled.div<SidebarOptionProps>`
  height: 44px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: ${(props: SidebarOptionProps) =>
    props.active ? "#0d7963" : "#025f4c"};
  opacity: ${(props: SidebarOptionProps) => (props.active ? "1" : "0.2")};
  font-weight: ${(props: SidebarOptionProps) => (props.active ? "600" : "500")};
  cursor: pointer;

  &:hover {
    opacity: ${(props: SidebarOptionProps) => (props.active ? "1" : "0.5")};
  }

  @media (max-width: 1020px) {
    & > span {
      display: none;
    }
  }
`;

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOptions,
  selectedSidebarOption,
  setSelectedSidebarOption,
}) => {
  return (
    <SidebarStyles>
      {sidebarOptions.map((option) => (
        <SidebarOptionStyles
          key={option.title}
          active={option.title === selectedSidebarOption}
          onClick={() => setSelectedSidebarOption(option.title)}
        >
          {option.icon}
          <span>{option.title}</span>
        </SidebarOptionStyles>
      ))}
    </SidebarStyles>
  );
};

export default Sidebar;
