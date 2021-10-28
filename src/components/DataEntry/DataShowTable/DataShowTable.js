import React from "react";

import "./DataShowTable.scss";

import DataShowItem from "./DataShowItem/DataShowItem";

export default function DataShowTable() {
    const a = [
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
        [
            ["burger", 12.8, 2, "21-10-2021"],
            ["ice cream", 12.8, 2, "21-10-2021"],
            ["french fries", 12.8, 2, "21-10-2021"],
            ["rice", 12.8, 2, "21-10-2021"],
        ],
    ];

    return (
        <div className="show-table">
            <h2>Overview of Food Wasted in the last 10 days</h2>
            <div className="table-header">
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
            </div>
            {a.map((elem) => (
                <DataShowItem itemList={elem} />
            ))}
        </div>
    );
}
