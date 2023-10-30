import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ServerUrl from "../../constants";
import { useAuth } from "../../store/AuthContext";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/login-animation.json";
import styles from "./Signup.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("attendee");
  const modeHandler = () => {
    return (e) => {
      setMode(e.target.innerText.toLowerCase());
    };
  }
  const { login } = useAuth();
  const [user, setUser] = useState(
    {
      type: mode,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  const handleDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const registerUser = async () => {
      const response = await fetch(`${ServerUrl}/api/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: user.type,
          username: user.name,
          email: user.email,
          password: user.password,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        const message = data.message || "Something went wrong, please try again later"
        alert(message);
        window.location.reload();
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        login(data.token, data.result);
        navigate("/");
      }
    };
    registerUser();
  };
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginCard} method="POST" onSubmit={handleSubmit}>
        <div className={styles.mode}>
          <button
            style={{ 
              backgroundColor: mode === "attendee" ? "#F9A826" : "white",
              color: mode === "attendee" ? "white" : "black",
            }}
            onClick={modeHandler()}
          >
            Attendee
          </button>
          <button
            style={{ 
              backgroundColor: mode === "organiser" ? "#F9A826" : "white",
              color: mode === "organiser" ? "white" : "black",
            }}
            onClick={modeHandler()}
          >
            Organiser
          </button>
        </div>
        <div className={styles.header}>
          <h1 className={styles.title}>Create an account on TickItNow!</h1>
        </div>
        <div className={styles.loginForm}>
          <input 
            className={styles.input} 
            type="text" 
            name='name'
            onChange={handleDataChange}
            placeholder="Full name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name='email'
            onChange={handleDataChange}
            placeholder="Enter your email"
            required
          />
          <input
            className={styles.input}
            type="password"
            name='password'
            onChange={handleDataChange}
            placeholder="Enter your password"
            required
          />
          <input
            className={styles.input}
            type="password"
            name='confirmPassword'
            onChange={handleDataChange}
            placeholder="Confirm password"
            required
          />
        </div>
        <div className={styles.or}>
          <hr className={styles.divider} />
          <div style={{ margin: "0.25rem 1rem" }}>or</div>
          <hr className={styles.divider} />
        </div>
        <p>
          Already have an account?{" "}
          <span
            style={{
              color: "#F9A826",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
        <Button
          variant="contained"
          type="submit"
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
          Sign Up
          <EastIcon />
        </Button>
      </form>
      <div className="login-animation w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

export default SignUp