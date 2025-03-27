import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import WorkInProgress from "./WorkInProgress";
import Mattress from "./Mattress";
import TeaBags from "./TeaBags";
import CarOil from "./CarOil";

import "./app.css";
import Batteries from "./Batteries";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/mattress" element={<Mattress />} />
                <Route path="/tea-bags" element={<TeaBags />} />
                <Route path="/car-oil" element={<CarOil />} />
                <Route path="/batteries" element={<Batteries />} />
                <Route path="*" element={<WorkInProgress />} />
            </Routes>
        </Router>
    );
};

export default App;
