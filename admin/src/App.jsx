import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";
import OrderItem from "./pages/OrderItem";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/add" element={<AddItem />} />
          <Route path="/list" element={<ListItem />} />
          <Route path="/orders" element={<OrderItem />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
