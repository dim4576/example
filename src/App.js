import Hat from "./components/hat/Hat";
import Menu from "./components/menu/Menu";
import Display from "./components/display/Display";
import classes from "./App.module.css";
import React from "react";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className={classes.main}>
            <Hat/>
            <Menu/>
            <Display/>
            <Footer/>
        </div>
    );
}

export default App;
