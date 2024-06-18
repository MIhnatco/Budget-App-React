import React from "react";
import { Routes, Route } from "react-router-dom";

//Imports
import Home from "./pages/home/home.component";
import Navigation from "./pages/navigation/navigation.component";
import Login from "./pages/login/login.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
