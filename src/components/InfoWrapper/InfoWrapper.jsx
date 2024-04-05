import React from "react";
import "./InfoWrapper.css";

export default function InfoWrapper({ children }) {
    return (
        <div className="info-wrapper">
            {React.Children.map(children, (child, index) => {
                if (index < children.length - 1) {
                    return (
                        <>
                            {child}
                            <DotIcon></DotIcon>
                        </>
                    );
                } else {
                    return child;
                }
            })}
        </div>
    );
}

function DotIcon() {
    return <i className="fa-solid fa-circle dot"></i>;
}
