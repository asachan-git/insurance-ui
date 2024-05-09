import styled from "@emotion/styled";
const SidebarStyles = styled.div `
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
const SidebarOptionStyles = styled.div `
  height: 44px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: ${(props) => props.active ? "#0d7963" : "#025f4c"};
  opacity: ${(props) => (props.active ? "1" : "0.2")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  cursor: pointer;

  &:hover {
    opacity: ${(props) => (props.active ? "1" : "0.5")};
  }

  @media (max-width: 1020px) {
    & > span {
      display: none;
    }
  }
`;
const Sidebar = ({ sidebarOptions, selectedSidebarOption, setSelectedSidebarOption, }) => {
    return (React.createElement(SidebarStyles, null, sidebarOptions.map((option) => (React.createElement(SidebarOptionStyles, { key: option.title, active: option.title === selectedSidebarOption, onClick: () => setSelectedSidebarOption(option.title) },
        option.icon,
        React.createElement("span", null, option.title))))));
};
export default Sidebar;
