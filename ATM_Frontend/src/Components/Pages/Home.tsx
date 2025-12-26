import { useNavigate } from "react-router-dom";
import ContainerHome from "../Organisms/Container/ContainerHome";
import MainLayout from "../Templates/MainLayout";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user?.cartNo);
  const [balance, setBalance] = useState<number>();

  const handleDeposit = () => {
    navigate("/Deposit");
  };
  const handleWithdraw = () => {
    navigate("/Withdraw");
  };
  const handleTransactionHistory = () => {
    navigate("/Transaction");
  };
  const fetchdata =async()=>{
    const res = await fetch("http://localhost:8080/ATM_System/Account?cartNo=1001");
    if(res.ok){
      const data = await res.json();
      console.log("Full backend response:", data);
      setBalance(data);
      console.log(data);
    }
  }
  useEffect(()=>{
    fetchdata();
  },[]);
  return (
    <div>
      <MainLayout>
        <div>
          <ContainerHome
            placeholder={""}
            placeholder1={""}
            onChange={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
            className={""}
            name={"Bank ATM System"}
            name1={""}
            name2={"HOME"}
            onClick={handleDeposit}
            onClick1={handleWithdraw}
            onClick2={handleTransactionHistory}
            href={"/"}
          ></ContainerHome>
        </div>
      </MainLayout>
    </div>
  );
};
