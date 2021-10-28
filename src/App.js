import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Shared/Sidebar";
import DataEntry from "./components/DataEntry/DataEntry";
import TodaysForecast from "./components/TodaysForecast/TodaysForecast";

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/forecast/">{<TodaysForecast />}</Route>
                    <Route path="/input-data/">{<DataEntry />}</Route>
                    <Route path="/admin/">{<div>lgkhjgbkhj</div>}</Route>
                    <Route path="/">{<div>lgkhjgbkhj</div>}</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
