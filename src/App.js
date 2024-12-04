import Hat from "./components/hat/Hat";
import Menu from "./components/menu/Menu";
import Display from "./components/display/Display";
import classes from "./App.module.css";
import React from "react";

function App() {

    return (
        <div className={classes.main}>
            <div className={classes.hat}><Hat/></div>
            <div className={classes.menu}><Menu/></div>
            <div className={classes.display}><Display/></div>
        </div>
    );
}

export default App;
