import { React, useState, useEffect } from "react";
import Item from "./Item/Item";

import "./TodaysForecast.scss";

export default function TodaysForecast() {
    const [fetched, setFetched] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4200/getUser")
            .then((response) => response.json())
            .then((data) => {
                console.log(2, typeof data);

                setFetched(data.data[0].itemPrediction);
            })
            .catch((e) => {
                console.log(e, "asdasd");
            })
            .finally(() => {
                console.log("fetched:", fetched);
            });
    }, []);

    // const [counter, setcounter] = useState(1);
    return (
        <div className="divider">
            <h1>Today's Prediction</h1>
            <div className="todays-forecast">
                {/* {console.log(213213)}
                {console.log(fetched)}
                {fetched ? <Item /> : null} */}
                {fetched && <Item item={fetched} />}
            </div>
        </div>
    );
}
