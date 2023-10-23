import React from "react";
import { useNavigate } from "react-router-dom";
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
        <button className={styles.loginButt}>
          <i
            className="fa-brands fa-google"
            style={{ marginRight: "10px" }}
          ></i>
          Login as Lawyer
        </button>
        <div className={styles.or}>
          <hr className={styles.divider} />
          <div style={{ margin: "10px" }}>or</div>
          <hr className={styles.divider} />
        </div>
        <button className={styles.loginButt}>
          <i
            className="fa-brands fa-google"
            style={{ marginRight: "10px" }}
          ></i>
          Login as Client
        </button>
      </div>
      <div className="login-animation w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Login;