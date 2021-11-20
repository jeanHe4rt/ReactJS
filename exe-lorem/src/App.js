import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlanetsScreen from "./screens/Planets";
import PlanetScreen from "./screens/Planet";
import NotFoundScreen from "./screens/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PlanetsScreen/>}/>
          <Route exact path="/planet/:id" element={<PlanetScreen/>}/>
          <Route path='*' element={<NotFoundScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
