import React from "react";

export default function Item({ item }) {
    return (
        <div className="forecast-item">
            {item.map((elem) => (
                <div>
                    <h3>{elem[0]}</h3>
                    <h3>{elem[1]}</h3>
                </div>
            ))}
            {/* <div className="chart-div"></div> */}
        </div>
    );
}
