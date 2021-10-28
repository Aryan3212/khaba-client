import React from "react";

export default function DataShowItem({ itemList }) {
    return (
        <div>
            {itemList.map((elem) => {
                return (
                    <>
                        <h5>elem[0]</h5>
                        <h5>elem[1]</h5>
                        <h5>elem[2]</h5>
                        <h5>elem[3]</h5>
                    </>
                );
            })}
        </div>
    );
}
