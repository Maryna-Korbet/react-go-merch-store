import {Routes, Route} from "react-router-dom";
import {Home} from "pages/Home";
import {About} from "pages/About";
import {Products}  from "pages/Products";
// import {NotFound} from "path/to/pages/NotFound";
import { ProductDetails } from "pages/ProductDetails";
import { Mission } from "./Mission";
import { Reviews } from "./Reviews";
import { Team } from "./Team";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
    return (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="mission" element={<Mission />} />
                <Route path="team" element={<Team />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
    );
  };