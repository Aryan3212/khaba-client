import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Shared/Sidebar";
import DataEntry from "./components/DataEntry/DataEntry";
import TodaysForecast from "./components/TodaysForecast/TodaysForecast";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/input-data/">{<DataEntry />}</Route>
                    <Route path="/admin/">{<AdminPanel />}</Route>
                    <Route path="/">{<TodaysForecast />}</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
