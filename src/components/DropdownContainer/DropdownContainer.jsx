import { useState, useEffect } from "react";
import "./DropdownContainer.css";

export default function DropdownContainer({ children, btnConfig, hideOnClick = true }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    function toggleDropdown() {
        setIsDropdownVisible(!isDropdownVisible);
    }
    return (
        <div className="dropdown-container">
            <button className={btnConfig.className} onClick={toggleDropdown}>
                {btnConfig.icon1 ? <i className={btnConfig.icon1}></i> : <></>}
                {btnConfig.text ? <span>{btnConfig.text}</span> : <></>}
                {btnConfig.icon2 ? <i className={btnConfig.icon2}></i> : <></>}
            </button>

            {isDropdownVisible ? (
                <Dropdown children={children} toggleDropdown={toggleDropdown} hideOnClick={hideOnClick} />
            ) : (
                <></>
            )}
        </div>
    );
}

function Dropdown({ children, toggleDropdown, hideOnClick }) {
    return (
        <>
            {hideOnClick ? (
                <ul className="dropdown" onClick={toggleDropdown}>
                    {children}
                </ul>
            ) : (
                <ul className="dropdown">{children}</ul>
            )}
        </>
    );
}
