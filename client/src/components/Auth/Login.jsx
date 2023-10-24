import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/login-animation.json";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to TickItNow!</h1>
        </div>
        <div className={styles.loginForm}>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Enter your password"
          />
          <div className={styles.or}>
            <hr className={styles.divider} />
            <div style={{ margin: "0.25rem 1rem" }}>or</div>
            <hr className={styles.divider} />
          </div>
          <p>
            Don't have an account?{" "}
            <span
              style={{
                color: "#F9A826",
                fontWeight: "700",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
          <Button
            variant="contained"
            onClick={() => navigate("/home")}
            sx={{
              backgroundColor: "#F9A826",
              color: "white",
              width: "100%",
              height: "3rem",
              fontSize: "1.25rem",
              fontWeight: "700",
              borderRadius: "0.5rem",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#F9A826",
                opacity: "0.8",
                gap: "1.5rem",
              },
            }}
          >
            Login
            <EastIcon />
          </Button>
        </div>
      </div>
      <div className="login-animation w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Login;