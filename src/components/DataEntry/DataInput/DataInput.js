import React, { useState } from "react";
import Axios from "axios";
import "./DataInput.scss";

export default function DataInput({ props }) {
    const [burgerB, setBurgerB] = useState(0);
    const [burgerW, setBurgerW] = useState(0);
    const [creamB, setCreamB] = useState(0);
    const [creamW, setCreamW] = useState(0);
    const [friesB, setFriesB] = useState(0);
    const [friesW, setFriesW] = useState(0);
    const [riceB, setRiceB] = useState(0);
    const [riceW, setRiceW] = useState(0);
    function callAPI(produced, waste, item) {
        console.log(produced, waste, item);
        Axios.post("https://khaba.herokuapp.com/postItemEachDay", {
            produced: produced,
            wasted: waste,
            item: item,
        }).then((response) => {
            if (response.status === 200) {
                console.log("success");
            } else {
                alert("error at" + item);
                console.log("user not found");
            }
        });
    }

    function handleSubmission(event) {
        event.preventDefault();
        if (
            burgerB &&
            burgerW &&
            creamB &&
            creamW &&
            friesB &&
            friesW &&
            riceB &&
            riceW
        ) {
            callAPI(burgerB, burgerW, "Burger");
            callAPI(creamB, creamW, "Ice Cream");
            callAPI(friesB, friesW, "French Fries");
            callAPI(riceB, riceW, "Rice");
            setBurgerB(0);
            setBurgerW(0);
            setCreamB(0);
            setCreamW(0);
            setFriesB(0);
            setFriesW(0);
            setRiceB(0);
            setRiceW(0);
            alert("Input was successful");
        } else {
            alert("Please fill all the input");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmission} className="data-input-bar">
                <div className="data-item">
                    <h4>Burger</h4>
                    <div>
                        <label htmlFor="">Amount Bought(in kg)</label>
                        <input
                            type="number"
                            value={burgerB}
                            onChange={(e) => setBurgerB(e.target.value)}
                            placeholder="00"
                        />
                        <br />
                        <label htmlFor="">Wasted Amount(in kg)</label>
                        <input
                            type="number"
                            value={burgerW}
                            onChange={(e) => setBurgerW(e.target.value)}
                            placeholder="00"
                        />
                    </div>
                </div>
                <div className="data-item">
                    <h4>Ice Cream</h4>
                    <div>
                        <label htmlFor="">Amount Bought(in kg)</label>
                        <input
                            type="number"
                            value={creamB}
                            onChange={(e) => setCreamB(e.target.value)}
                            placeholder="00"
                        />
                        <br />
                        <label htmlFor="">Wasted Amount(in kg)</label>
                        <input
                            type="number"
                            value={creamW}
                            onChange={(e) => setCreamW(e.target.value)}
                            placeholder="00"
                        />
                    </div>
                </div>
                <div className="data-item">
                    <h4>French Fries</h4>
                    <div>
                        <label htmlFor="">Amount Bought(in kg)</label>
                        <input
                            type="number"
                            value={friesB}
                            onChange={(e) => setFriesB(e.target.value)}
                            placeholder="00"
                        />
                        <br />
                        <label htmlFor="">Wasted Amount(in kg)</label>
                        <input
                            type="number"
                            value={friesW}
                            onChange={(e) => setFriesW(e.target.value)}
                            placeholder="00"
                        />
                    </div>
                </div>
                <div className="data-item">
                    <h4>Rice</h4>
                    <div>
                        <label htmlFor="">Amount Bought(in kg)</label>
                        <input
                            type="number"
                            value={riceB}
                            onChange={(e) => setRiceB(e.target.value)}
                            placeholder="00"
                        />
                        <br />
                        <label htmlFor="">Wasted Amount(in kg)</label>
                        <input
                            type="number"
                            value={riceW}
                            onChange={(e) => setRiceW(e.target.value)}
                            placeholder="00"
                        />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
