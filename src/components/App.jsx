import {Routes, Route} from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/page/About";
import Products  from "path/to/page/Products";
import NotFound from "path/to/page/NotFound";

export const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};
