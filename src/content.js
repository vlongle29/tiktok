import React, { useEffect } from "react";

function Content() {
    useEffect(() => {
        console.log("mounted");
    });

    return (
        <div>
            <h1>Hi anh em</h1>
        </div>
    );
}

export default Content;
