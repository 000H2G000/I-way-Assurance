import React, {  useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
  
} from "./styles";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import bpo from '../../assets/logo-bpo.png'
import {
    AiOutlineApartment,
    
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const searchRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <div >
  <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img   src={bpo} alt="logo" />
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            
        </SSidebar>
        </div>
      
    );
};

const linksArray = [
    {
        label: "Prescription",
        icon: <AppRegistrationIcon />,
        to: "/",
        notification: 0,
    },
    {
        label: "Profile",
        icon: <AccountCircleIcon />,
        to: "/statistics",
        notification: 0,
    },
    {
        label: "Consultation",
        icon: <BsPeople />,
        to: "/customers",
        notification: 0,
    },

    {
        label: "Verify Medicine",
        icon: <DomainVerificationIcon />,
        to: "/VerifyMedecin",
        notification: 1,
    },
    {
        label: "ActesPharmacie",
        icon: <AiOutlineApartment />,
        to: "/ActesPharmacie",
        notification: 0,
    },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Login",
        icon: <AiOutlineSetting />,
        to: "/Login",
    },
    {
        label: "SignUp",
        icon: <AiOutlineSetting />,
        to: "/SignUp",
    },
    {
        label: "Welcome",
        icon: <AiOutlineSetting />,
        to: "/Welcome",
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

export default Sidebar;
