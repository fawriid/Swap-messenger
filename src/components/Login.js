import React from "react";

// icons
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from "@ant-design/icons";

// styles
import styles from "./Login.module.css";

//
import firebase from "firebase/app";
import { auth } from "../Firebase";


const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.intro}>
                    <h2>
                        Wellcome to <span>Swap</span> Messenger <span>!</span>
                    </h2>
                </div>
                <div
                    className={styles.option}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <span>Sign in with Google </span>
                    <GoogleOutlined className={styles.logo} />
                </div>
                <div className={styles.option}>
                    <span>Sign in with Twitter </span>
                    <TwitterOutlined className={styles.logo} />
                </div>
                <div className={styles.option}>
                    <span>Sign in with Facebook </span>
                    <FacebookFilled className={styles.logo} />
                </div>
            </div>
        </div>
    );
};

export default Login;
