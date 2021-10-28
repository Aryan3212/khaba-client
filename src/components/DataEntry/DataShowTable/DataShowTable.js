import React from "react";
import DataShowItem from "./DataShowItem/DataShowItem";

export default function DataShowTable() {
    const a = [];

    return (
        <div className="show-table">
            <h2>Overview of Food Wasted in the last 10 days</h2>
            <div className="table-header">
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                </div>
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                </div>
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                </div>
            </div>
            <DataShowItem itemList={a} />
        </div>
    );
}
