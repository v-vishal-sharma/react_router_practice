import React from  "react";
import {Route, Routes} from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Errors from "../Pages/Errors";
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" Component={About}/>
                <Route exact path="/contact" Component={Contact}/>
                <Route path="*" Component={Errors}/>
            </Routes>

            {/* <About/>
            <Contact/> */}
        </>
    );
}

export default App;