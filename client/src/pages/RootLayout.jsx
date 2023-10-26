import React from "react";
import { Box } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import NavBar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const [open, setOpen] = React.useState(true);
  const navigation = useNavigation();
  const theme = useTheme();
  const extractedQuery = theme.breakpoints.down("sm").substring(7);
  const isMobile = useMediaQuery({ query: extractedQuery });
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn")
  );
  const [role, setRole] = React.useState(localStorage.getItem("user").role);

  React.useEffect(() => {
    const flag1 = localStorage.getItem("isLoggedIn");
    const flag2 = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).role
      : null;
    if (flag1 === "true" && (flag2 === "attendee" || flag2 === "organizer")) {
      setIsLoggedIn(true);
      setRole(flag2);
    } else {
      setIsLoggedIn(false);
      setRole(null);
    }
  }, []);

  return (
    <Box sx={{ height: "100%", background: "var(--bg-color)" }}>
      <NavBar isLoggedIn={isLoggedIn} role={role} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowX: "hidden",
          backgroundColor: "var(--bg-color)",
        }}
      >
        {navigation.state === "loading" ? (
          <Backdrop
            sx={{
              color: "#fff",
            }}
            open={true}
          >
            <div className="flex flex-col items-center justify-center gap-3 text-xs sm:text-base">
              <CircularProgress color="inherit" />
              Have patience, we are loading your data...
            </div>
          </Backdrop>
        ) : (
          <Outlet />
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout;
