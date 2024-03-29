import React, { useEffect, useState } from "react";

import "./DataShowTable.scss";

import DataShowItem from "./DataShowItem/DataShowItem";
import Axios from "axios";

export default function DataShowTable() {
    const [burger, setBurger] = useState([]);
    const [cream, setCream] = useState([]);
    const [fries, setFries] = useState([]);
    const [rice, setRice] = useState([]);

    function callAPI(name) {
        Axios.get("https://khaba.herokuapp.com/getWaste", {
            params: {
                name: name,
            },
        }).then((response) => {
            if (response.status === 200) {
                if (name === "Burger") setBurger(response.data.data.days);
                if (name === "Ice Cream") setCream(response.data.data.days);
                if (name === "French Fries") setFries(response.data.data.days);
                if (name === "Rice") setRice(response.data.data.days);
            } else {
                console.log("error at get");
            }
        });
    }

    useEffect(() => {
        callAPI("Burger");
        callAPI("Ice Cream");
        callAPI("French Fries");
        callAPI("Rice");
    }, []);

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
                <DataShowItem itemList={burger} name="Burger" />
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <DataShowItem itemList={cream} name="Ice Cream" />
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <DataShowItem itemList={fries} name="French Fries" />
                <div>
                    <h4>Item</h4>
                    <h4>Produced(kg)</h4>
                    <h4>Wasted</h4>
                    <h4>Date</h4>
                </div>
                <DataShowItem itemList={rice} name="Rice" />
            </div>
        </div>
    );
}
