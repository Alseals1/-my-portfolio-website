import "./App.css";
import React from "react";
import SiteMenu from "./sections/SiteMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./sections/Projects/ProjectDetail";

function App() {
  return (
    <div className="App bg-black">
      <Router>
        <div className="">
          <Routes>
            <Route
              path="/projects/project/:projectId"
              element={<ProjectDetail />}
            />
            <Route path="/" element={<SiteMenu />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
