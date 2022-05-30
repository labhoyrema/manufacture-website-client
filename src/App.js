import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import DeshBoard from "./Pages/Deshboard/DeshBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequereAuth from "./Pages/Login/RequereAuth";
import AddItem from "./Pages/Deshboard/AddItem";
import Pagenotfound from "./Pages/404page/404";
import Myorders from "./Pages/Deshboard/Myorders";
import AllUsers from "./Pages/Deshboard/AllUsers";
import ManageOrders from "./Pages/Deshboard/ManageOrders";
import Payment from "./Pages/Deshboard/Payment";
import Blog from "./Pages/Blog/Blog";
import AddReview from "./Pages/Deshboard/AddReview";

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="deshboard" element={<DeshBoard></DeshBoard>}>
          <Route index element={<Myorders></Myorders>} />
          <Route path="additem" element={<AddItem></AddItem>} />
          <Route path="addreview" element={<AddReview></AddReview>} />
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path="allusers" element={<AllUsers></AllUsers>} />
          <Route path="manageorders" element={<ManageOrders></ManageOrders>} />
        </Route>

        <Route
          path="purchase/:singleProductId"
          element={
            <RequereAuth>
              <Purchase></Purchase>
            </RequereAuth>
          }
        />
        <Route path="*" element={<Pagenotfound></Pagenotfound>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
