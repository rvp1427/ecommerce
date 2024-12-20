import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="flex flex-col gap-3">
      <NavLink className="link-style" to="/add">
        <img src="add_icon.png" alt="add" />
        <h2>Add Items</h2>
      </NavLink>
      <NavLink className="link-style" to="/list">
        <img src="order_icon.png" alt="order" />
        <h2>List Items</h2>
      </NavLink>
      <NavLink className="link-style" to="/orders">
        <img src="order_icon.png" alt="order" />
        <h2>Orders</h2>
      </NavLink>
    </div>
  );
}

export default Sidebar;
