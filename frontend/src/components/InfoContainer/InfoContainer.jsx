import React from "react";
import "./InfoContainer.css";

export default function InfoContainer({ children, size }) {
    return (
        <div className={size ? `info-container ${size}` : `info-container`}>
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
