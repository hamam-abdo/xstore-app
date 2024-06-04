import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Popp from "./components/Popp";
import Cart from "./components/Cart";
import Item from "./components/Item";
import { useSelector } from "react-redux";
import { Cart_Popp, Seva, Accunt } from "./assets";
import Filter from "./components/Filter";
import FilterShop from "./components/FilterShop";
import FilterBlog from "./components/FilterBlog";
import PorductDetlails from "./components/PorductDetlails";
import { ToastContainer } from "react-toastify";
import Account from "./components/Account";
function App() {
  const state = useSelector((state) => state.toogle.Type);
  const Or = useSelector((state) => state.toogle.Or);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  useEffect(() => {
    if (pathname == "/") navigate("/Home");
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer hideProgressBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path=":Location/:Type/category/:cat"
          element={
            <Filter>
              <FilterShop />
              <FilterBlog />
            </Filter>
          }
        />
        <Route path=":Location/PorductID/:id" element={<PorductDetlails />} />
      </Routes>

      <Popp>
        {state == "Cart" ? (
          Or == "Cart" ? (
            <>
              <Cart img={Cart_Popp} text={"Shopping Cart"} state={cart} />
            </>
          ) : (
            <Cart img={Seva} text={"My Wishlist "} state={wishlist} />
          )
        ) : state == "Accunt" ? (
          <Account img={Accunt} text={" Sign In "} />
        ) : (
          <Item id={state} />
        )}
      </Popp>
      <Footer />
    </>
  );
}

export default App;
