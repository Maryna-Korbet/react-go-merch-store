import {Routes, Route} from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/page/About";
import Products  from "path/to/page/Products";

export const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products/>} />
            </Routes>
        </div>
    );
};
