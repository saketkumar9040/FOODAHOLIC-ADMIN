import "./App.css"
import AddFoodData from "./components/addFoodData/AddFoodData";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import OrderSection from "./components/orders/OrderSection";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Home from "./components/home/Home";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/orders" element={<OrderSection/>} />
    <Route path="/addfood" element={<AddFoodData/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
