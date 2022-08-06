import { React, useState, useEffect } from "react";
import Item from "./Item/Item";

import "./TodaysForecast.scss";

export default function TodaysForecast() {
    const [fetched, setFetched] = useState([]);
    useEffect(() => {
        fetch("https://khaba.herokuapp.com/getUser")
            .then((response) => response.json())
            .then((data) => {
                console.log(2, typeof data);

                setFetched(data.data[0].itemPrediction);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const dummyData = [
        ["Rice", 11],
        ["Water", 171],
        ["Sauce", 20],
        ["Granola", 90],
    ];
    return (
        <div className="divider">
            <h1>Today's Prediction</h1>
            <div className="todays-forecast">
                {fetched ? <Item item={fetched} /> : <Item item={dummyData} />}
            </div>
        </div>
    );
}
