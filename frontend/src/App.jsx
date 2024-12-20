import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ProductContext } from "./components/ProductContext";
import Product from "./pages/Product";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <CartProvider>
                <Layout />
              </CartProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route
              path="collection"
              element={
                <ProductContext>
                  <Collection />
                </ProductContext>
              }
            ></Route>
            <Route
              path="/collection/:id"
              element={
                <ProductContext>
                  <Product />
                </ProductContext>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
