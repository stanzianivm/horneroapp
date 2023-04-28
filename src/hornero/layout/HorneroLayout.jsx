import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../../ui/components/NavBar";
import { SideBar } from "../../ui/components/SideBar";

const drawerWidth = 280;

export const HorneroLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
