import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "../App.css";
import Context from "./Context";

function DarkMode() {
    const context = useContext(ThemeContext);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Click</button>
            <Context />
        </div>
    );
}

export default DarkMode;
