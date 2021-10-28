import React from "react";

import "./DataInput.scss";

import DataItem from "./DataItem/DataItem";

export default function DataInput({ props }) {
    return (
        <div className="data-input-bar">
            <DataItem itemName="Burger" />
            <DataItem itemName="Ice Cream" />
            <DataItem itemName="French Fries" />
            <DataItem itemName="Rice" />
        </div>
    );
}
