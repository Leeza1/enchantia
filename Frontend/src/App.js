import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import About from "./pages/about/About";
import Orders from "./pages/orders/Orders";
import AdminOrders from "./pages/admin/AdminOrders/AdminOrders";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* about */}
          <Route path="/about" element={<About />} />

          {/* product details */}
          <Route path="/products/details/:id" element={<ProductDetails />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/*contact */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          
          {/* Order */}
          <Route path="/orders" element={<Orders />} />

          {/* cart */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Admin routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products/edit/:id" element={<AdminProductEdit />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
