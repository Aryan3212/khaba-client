import { React, useState, useEffect } from "react";

import "./AdminPanel.scss";
import MapShow from "./MapShow/MapShow";

export default function AdminPanel() {
    const [fetched, setFetched] = useState(null);
    // eslint-disable-next-line
    useEffect(() => {
        fetch("https://khaba.herokuapp.com/getUser")
            .then((response) => response.json())
            .then((data) => {
                setFetched(data);
            })
            .catch((e) => {
                console.log(e, "asdasd");
            })
            .finally(() => {});
    }, []);
    console.log(fetched);
    return (
        <div className="admin-panel">
            <h1>Take this route to deliver</h1>
            {fetched ? (
                <MapShow locationData={fetched} />
            ) : (
                <div style={{ textAlign: "center", color: "light-blue" }}>
                    Map data is loading...
                </div>
            )}
        </div>
    );
}
