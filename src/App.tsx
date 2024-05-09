import React, { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Endorsements from "./components/Endorsements/Endorsements";
import SideModal from "./components/SideModal/SideModal";
import InsuranceCard from "./components/InsuranceCard/InsuranceCard";
import AlertDetailsCard from "./components/AlertDetailsCard/AlertDetailsCard";

import EndorsementIcon from "./assets/endorsement.svg?react";
import WalletIcon from "./assets/wallet.svg?react";

import "./styles.css";

const sidebarOptions = [
  {
    title: "Endorsements",
    icon: <EndorsementIcon />,
  },
  {
    title: "CD Accounts",
    icon: <WalletIcon />,
  },
];

export default function App() {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState<string>(
    sidebarOptions[0].title,
  );
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  let content = null;
  console.log(openAlert);

  switch (selectedSidebarOption) {
    case "Endorsements":
      content = <Endorsements />;
      break;
    case "item2":
      content = <p></p>;
      break;
    default:
      content = <p></p>;
  }

  return (
    <div className="App">
      <Header setOpenAlert={setOpenAlert} />
      <div className="main--content">
        <Sidebar
          sidebarOptions={sidebarOptions}
          selectedSidebarOption={selectedSidebarOption}
          setSelectedSidebarOption={setSelectedSidebarOption}
        />
        <main>{content}</main>
      </div>
      {openAlert && (
        <SideModal setOpenAlert={setOpenAlert} openAlert={openAlert}>
          <InsuranceCard type="minimal" style={{ padding: 0 }} />
          <AlertDetailsCard />
        </SideModal>
      )}
    </div>
  );
}
