import Logo from "./logo/Logo";
import React from "react";
import UserBar from "./userbar/UserBar";
import classes from "./Hat.module.css";

const Hat = () => {
    return (
        <div className={classes.hat}>
            <Logo/>
            <UserBar/>
        </div>
    )
}

export default Hat