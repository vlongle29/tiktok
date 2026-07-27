import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Home.js'
import NewPage from "./New";
import ContactPage from "./Contact";

function AppRouter() {
    return (
        <div className="app">
            <nav> 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* ở đây nếu muốn link một đường link ra ngoài thì ta có thể dùng thẻ a và href */}
                {/* Còn thẻ Link và to để link một trang cục bộ trong dự án */}
                {/* Khi thẻ Link to và DOM thì nó vẫn sẽ là thẻ a href, nhưng có điều khi ấn vào
                nó Remove Default */}
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default AppRouter;
