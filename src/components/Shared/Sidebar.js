import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Sidebar.scss";

export default function Sidebar() {
    const [privileges, setPrivileges] = useState("user");

    return (
        <>
            <aside className="sidebar">
                <h1>KhaBa</h1>
                <nav className="navbar">
                    <ul>
                            {privileges === "user" ? (
                                <>
                                    <li>
                                        <Link to="/input-data/">
                                            Data Entry
                                        </Link>
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
            </aside>
        </>
    );
}
