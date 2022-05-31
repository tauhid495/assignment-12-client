
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs';
import Navbar from './Shared/Navbar';
import MyPortfolio from './pages/MyPortfolio';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './Authentication/Login';
import Footer from './Shared/Footer';
import Register from './Authentication/Register';
import NotFound from './NotFound/NotFound';
import UnderConstruction from './NotFound/UnderConstruction';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import AllCustomers from './pages/Dashboard/AllCustomers';
import ManageProducts from './pages/Dashboard/ManageProducts';
import RequireAuth from './Authentication/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Parchase from './Parchase/Parchase';
import Payment from './pages/Dashboard/Payment';
import UpdateProfile from './pages/Dashboard/UpdateProfile';


function App() {
  return (
    <div className="bg-gray-100">
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/myportfolio' element={
          <MyPortfolio />
        }></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='update' element={<UpdateProfile />}></Route>
          <Route path='addreview' element={<AddReview />} />
          <Route index element={<MyProfile />} />
          <Route path='manageallorders' element={<ManageAllOrders />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='allcustomers' element={<AllCustomers />} />
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='manageproducts' element={<ManageProducts />} />
        </Route>
        <Route path='/product/:orderId' element={
          <RequireAuth><Parchase /></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/underconstruction' element={<UnderConstruction />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
