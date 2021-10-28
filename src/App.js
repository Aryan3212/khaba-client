import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./components/Shared/Sidebar";
import DataEntry from "./components/DataEntry/DataEntry";

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/forecast/">{<div>hello</div>}</Route>
                    <Route path="/input-data/">{<DataEntry />}</Route>
                    <Route path="/admin/">{<div>lgkhjgbkhj</div>}</Route>
                    <Route path="/">{<div>lgkhjgbkhj</div>}</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
