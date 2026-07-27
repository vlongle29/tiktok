import React from 'react';
import Button from "./button";
import GlobalStyles from "./Global";

function Appcss() {
    return (
       <GlobalStyles>
            <div>
                <Button />
                <Button primary />
            </div>
       </GlobalStyles>
    );
}

export default Appcss;
