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
        icon: React.createElement(EndorsementIcon, null),
    },
    {
        title: "CD Accounts",
        icon: React.createElement(WalletIcon, null),
    },
];
export default function App() {
    const [selectedSidebarOption, setSelectedSidebarOption] = useState(sidebarOptions[0].title);
    const [openAlert, setOpenAlert] = useState(false);
    let content = null;
    console.log(openAlert);
    switch (selectedSidebarOption) {
        case "Endorsements":
            content = React.createElement(Endorsements, null);
            break;
        case "item2":
            content = React.createElement("p", null);
            break;
        default:
            content = React.createElement("p", null);
    }
    return (React.createElement("div", { className: "App" },
        React.createElement(Header, { setOpenAlert: setOpenAlert }),
        React.createElement("div", { className: "main--content" },
            React.createElement(Sidebar, { sidebarOptions: sidebarOptions, selectedSidebarOption: selectedSidebarOption, setSelectedSidebarOption: setSelectedSidebarOption }),
            React.createElement("main", null, content)),
        openAlert && (React.createElement(SideModal, { setOpenAlert: setOpenAlert, openAlert: openAlert },
            React.createElement(InsuranceCard, { type: "minimal", style: { padding: 0 } }),
            React.createElement(AlertDetailsCard, null)))));
}
