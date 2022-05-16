import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { AccountCircle, ManageAccounts } from "@mui/icons-material";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Manage User",
      icon: <ManageAccounts />,
      link: "/admin/manageuser",
    },
  ];

  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions}>
        <h1>Admin Component</h1>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
