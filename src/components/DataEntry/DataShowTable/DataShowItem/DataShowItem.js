import React from "react";

import "./DataShowItem.scss";

export default function DataShowItem({ itemList, name }) {
    return (
        <div>
            <div className="data-show-items">
                {itemList.map((elem) => {
                    return (
                        <div>
                            <h5>{name}</h5>
                            <h5>{elem.produced}</h5>
                            <h5>{elem.wasted}</h5>
                            <h5>{new Date(elem.createdAt).toDateString()}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
