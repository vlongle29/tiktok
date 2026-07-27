import React, { useState } from "react";
import Content2 from "./content2";
import "./App.css";
import Content3 from "./content3";
import Timer from "./timerFunction";
import Fakechat from "./fakeChatApp";
import UseLayoutEffect from "./useLayoutEffect";
import Useref from "./useRef";
import UseCallBack from "./useCallBack";
import TodoApp from "./ToDoAppUseReduce";

function App2() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className="app2">
            <button onClick={handleShow}>Click</button>
            {show && <Content3 />}
            {show && <Timer />}
            {show && <Fakechat />}
            {show && <UseLayoutEffect />}
            {show && <Useref />}
            {show && <UseCallBack />}
        </div>
    );
}

export default App2;
