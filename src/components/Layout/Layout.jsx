import React from "react";
import Appbar from "./Appbar/Appbar";
import "./layout.scss";

const Layout = (props) => {
    return (
        <div className="layout">
            <Appbar />
            <div className="layout-container">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
