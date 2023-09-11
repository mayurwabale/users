import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Update from "./update";
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="update/:id" element={<Update/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRouter