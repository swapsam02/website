import React, { Fragment } from "react";
import Section from "./Section";

const Service = () =>{
    return (
        <Fragment>
            <div className="mid-section">
                <h1>Services</h1>
                <div className="l-sidebar">
                    <Section />
                    <Section />
                    <Section />
                </div>
                <div className="m-sidebar">
                    <Section />
                    <Section />
                    <Section />
                </div>
                <div className="r-sidebar">
                    <Section />
                    <Section />
                    <Section />
                </div>
                <div className="clr"></div>
            </div>  
        </Fragment>
    )
}

export default Service;