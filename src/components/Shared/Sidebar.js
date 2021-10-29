import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Sidebar.scss";
import khaba_logo from "./Khaba.png";
export default function Sidebar() {
    const [privileges, setPrivileges] = useState("user");
    const handleButtonClick = () => {
        if (privileges === "user") {
            setPrivileges("admin");
        } else {
            setPrivileges("user");
        }
    };
    return (
        <>
            <aside className="sidebar">
                <Link to="/forecast/">
                    <img src={khaba_logo} alt="Khaba logo" />
                </Link>
                <nav className="navbar">
                    <ul>
                        {privileges === "user" ? (
                            <>
                                <li>
                                    <Link to="/input-data/">Data Entry</Link>
                                </li>
                                <li>
                                    <Link to="/forecast/">
                                        Today's Forecast
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/admin/"> Admin's Panel</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                {privileges === "user" ? (
                    <Link
                        onClick={handleButtonClick}
                        to="/admin/"
                        className="auth-button"
                    >
                        Log in as Admin
                    </Link>
                ) : (
                    <Link
                        onClick={handleButtonClick}
                        to="/forecast/"
                        className="auth-button"
                    >
                        Log out
                    </Link>
                )}
            </aside>
        </>
    );
}
