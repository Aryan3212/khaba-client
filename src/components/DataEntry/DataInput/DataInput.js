import React from "react";

import "./DataInput.scss";

import DataItem from "./DataItem/DataItem";

export default function DataInput({ props }) {
    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="data-input-bar">
            <form>
                <DataItem itemName="Burger" />
                <DataItem itemName="Ice Cream" />
                <DataItem itemName="French Fries" />
                <DataItem itemName="Rice" />
                <input type="submit" onclick={handleClick} />
            </form>
        </div>
    );
}
