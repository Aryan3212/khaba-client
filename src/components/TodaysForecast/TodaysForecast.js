import { React, useState } from "react";
import Item from "./Item/Item";

import "./TodaysForecast.scss";

export default function TodaysForecast() {
    const b = [
        ["burger", 50],
        ["ice cream", 150],
        ["french fries", 550],
        ["rice", 250],
    ];
    // const [counter, setcounter] = useState(1);
    return (
        <div className="todays-forecast">
            <h1>Today's Prediction</h1>
            <Item item={b} />
        </div>
    );
}
