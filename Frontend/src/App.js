import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Orders from "./pages/orders/Orders";
import AdminOrders from "./pages/admin/AdminOrders/AdminOrders";
import List from "./pages/list/List";
import Bracelet from "./pages/bracelet/Bracelet";
import Ring from "./pages/ring/Ring";
import Necklace from "./pages/necklace/Necklace";
import Earing from "./pages/earing/Earing";
import NecklaceDetails from "./pages/productDetails/NecklaceDetails";
import BraceletDetails from "./pages/productDetails/BraceletDetails";
import RingDetails from "./pages/productDetails/RingDetails";
import EaringDetails from "./pages/productDetails/EaringDetails";
import Search from "./pages/search/Search";

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
          <Route path="/necklaces/details/:id" element={<NecklaceDetails />} />
          <Route path="/bracelets/details/:id" element={<BraceletDetails />} />
          <Route path="/rings/details/:id" element={<RingDetails />} />
          <Route path="/earings/details/:id" element={<EaringDetails />} />

          {/* cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/*contact */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          
          {/* Order */}
          <Route path="/orders" element={<Orders />} />

          {/* list */}
          <Route path="/list" element={<List />} />

          {/* bracelet */}
          <Route path='/bracelet' element={<Bracelet />} />

          {/* ring */}
          <Route path='/ring' element={<Ring />} />

          {/* necklace */}
          <Route path="/necklace" element={<Necklace />} />

          {/* earing */}
          <Route path="/earing" element={<Earing />} />

          
          
          {/* search */}
          <Route path="/search/:query" element={<Search />} />
          
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
