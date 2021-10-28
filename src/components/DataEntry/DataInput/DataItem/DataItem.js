import React from "react";

import "./DataItem.scss";

export default function DataItem({ itemName }) {
    return (
        <div className="data-item">
            <h4>{itemName}</h4>
            <div>
                <label htmlFor="">Amount Bought(in kg)</label>
                <input type="number" placeholder="00" />
                <br />
                <label htmlFor="">Wasted Amount(in kg)</label>
                <input type="number" placeholder="00" />
            </div>
        </div>
    );
}
