import React from "react";
import { Box } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import NavBar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const theme = useTheme();
  const extractedQuery = theme.breakpoints.down("sm").substring(7);
  const isMobile = useMediaQuery({ query: extractedQuery });

  return (
    <Box sx={{ height: "100%", background: "var(--bg-color)" }}>
      <NavBar />
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
              color: "var(--text-color)",
              backgroundColor: "var(--bg-color)",
            }}
            open={true}
          >
            <div className="flex flex-col items-center justify-center gap-3 text-xs sm:text-lg">
              <CircularProgress color="error" />
              Have patience, we are loading the page for you...
            </div>
          </Backdrop>
        ) : (
          <Outlet />
        )}
      </Box>
      {navigation.state !== "loading" &&
        <Footer />
      }
    </Box>
  );
};

export default RootLayout;
