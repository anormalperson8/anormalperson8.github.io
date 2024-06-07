import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import MainPage from './MainPage.jsx'
import './index.css'
// import IDPO from "./IDPO.jsx";
// import IDPOTeaching from "./IDPOTeaching.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path={"/react.html"} element={<MainPage/>}/>
                {/*<Route index exact path={"/teaching"} element={<Navigate to={"/teaching/students"}/>}/>*/}
                {/*<Route exact path={"/teaching/students"} element={<IDPO/>}/>*/}
                {/*<Route exact path={"/teaching/teachers"} element={<IDPOTeaching/>}/>*/}
            </Routes>
        </Router>
    </React.StrictMode>,
)
