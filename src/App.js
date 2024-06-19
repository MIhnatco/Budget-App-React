import React from "react";
import { Routes, Route } from "react-router-dom";

//Imports
import Home from "./pages/home/home.component";
import Navigation from "./pages/navigation/navigation.component";
import SignIn from "./pages/sign-in/signin.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
