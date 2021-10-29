import React from "react";

import "./DataShowItem.scss";

export default function DataShowItem({ itemList, name }) {
    return (
        <div>
            <div className="data-show-item">
                {itemList.map((elem) => {
                    return (
                        <div>
                            <h5>{name}</h5>
                            <h5>{elem[1]}</h5>
                            <h5>{elem[2]}</h5>
                            <h5>{elem.createdAt}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
