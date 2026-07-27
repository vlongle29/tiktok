import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// chõ as tức là cách gọi khác của BrowserRouter là Router
import "./index.css";
import App from "./App";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import UseMemo from "./useMemoHook";
import App3 from "./ToDoAppUseReduce";
import DarkMode from "./useContext/darklight";
import { ThemeProvide } from "./useContext/themeContext";
import GlobalState from "./Store";
import { StoreProvider } from "./Store";
import ToWayBinding from "./toWayBinding";
import UseImperative from "./useImperativeHandle";
import Appcss from "./workWithCss/AppCss";
import AppRouter from "./pages/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function emitComment(id) {
//     setInterval(() => {
//         window.dispatchEvent(
//             new CustomEvent(`lesson-${id}`, {
//                 detail: `Nội dung khóa học ${id}`,
//             })
//         );
//     }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

root.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <App2 /> */}
        {/* <UseMemo/> 
         <App3/>  */}
        {/* <ThemeProvide>
            <DarkMode />
        </ThemeProvide> */}
        {/* <StoreProvider>
            <GlobalState />
        </StoreProvider> */}
        {/* <ToWayBinding/> */}
        {/* <UseImperative/> */}
        {/* <Appcss/> */}
        <Router>
            <AppRouter />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
