import { useContext } from "react";
import { ThemeContext } from "./themeContext";


function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <div className={context.theme}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
    );
}

export default Paragraph;
