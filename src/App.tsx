import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.css'
import ProjectsPage from "./pages/ProjectsPage";
import CurrentProject from "./pages/CurrentProjectPage";
function App() {
  return (
    <div className="App">
        <header>
            <Link to={'/'}>
                TODO
            </Link>
        </header>
      <Routes>
        <Route path={'/'} element={<ProjectsPage/>} />
        <Route path={'/currentProject'} element={<CurrentProject/>} />
      </Routes>
    </div>
  );
}

export default App;
