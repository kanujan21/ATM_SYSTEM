import { Routes, Route } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Home } from "../Components/Pages/Home";
import Deposit from "../Components/Pages/Deposit";
import Withdraw from "../Components/Pages/Withdraw";
import LoginCart from "../Components/Pages/Login/LoginCart";
import Transaction from "../Components/Pages/transaction/Transaction";




const AppRouter = () => {
    const {isAuthenticated} = useAuth();
  return (
    <Routes>{
        isAuthenticated?(
            <>
        <Route path="/Deposit" element={<Deposit/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Withdraw" element={<Withdraw/>}></Route>
        <Route path="/Transaction" element={<Transaction/>}></Route>    
            </>
       ):
        (
        <>
        <Route path="/" element={<LoginCart/>}></Route>
        <Route path="/Deposit" element={<Deposit/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Withdraw" element={<Withdraw/>}></Route>
        <Route path="/Transaction" element={<Transaction/>}></Route>
  
        </>)
        }
        
    </Routes>
  )
}

export default AppRouter