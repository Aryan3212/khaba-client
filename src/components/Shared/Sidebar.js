import React, { useState } from "react";

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
                                <li>Data Entry</li>
                                <li>Today's Forecast</li>
                            </>
                        ) : (
                            <li>Admin's Panel</li>
                        )}
                    </ul>
                </nav>
            </aside>
        </>
    );
}
