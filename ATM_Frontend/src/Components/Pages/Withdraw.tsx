import { useNavigate } from "react-router-dom";
import MainLayout from "../Templates/MainLayout";
import ContainerDeposit from "../Organisms/Container/ContainerDeposit";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface list {
  id: number;
  cartNo: number;
  date: string;
  amount: number;
  Rs5000: number;
  Rs1000: number;
  Rs500: number;
  Rs100: number;
  action: string;
}
const Withdraw = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>();
  const [balance, setBalance] = useState<number>();
  const [getData, setGetData] = useState<list>();
  const { user } = useAuth();
  console.log(user?.cartNo);

  const Withdrawal = async () => {
    try {
      const payload = {
        cartNo: user?.cartNo,
        amount: amount,
        action: "Withdrawal",
      };
      const res = await fetch("http://localhost:8080/ATM_System/Withdrawal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("res", res.status);
      if (res.ok) {
        
      }
    } catch (err) {
      console.log(err);
    }
  };
  const Notes = async () => {
    const res = await fetch(
      `http://localhost:8080/ATM_System/Withdrawal?cartNo=${user?.cartNo}&action=Withdrawal`
    );
    if (res.ok) {
      const data: list = await res.json();
      console.log({ data });
      setGetData(data);
    }
  };
  console.log({ getData });

  const fetchBalance = async () => {
    const rest = await fetch(
      `http://localhost:8080/ATM_System/Account?cartNo=${user?.cartNo}`
    );
    if (rest.ok) {
      const data = await rest.json();
      setBalance(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchBalance();
  }, []);
  const handleAmount = (e: any) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    if (amount === undefined) return;

    const delay = setTimeout(() => {
          if (amount % 100 !== 0) {
      alert("Please enter an amount that is a multiple of 100.");
      return;
    }
      const fetchData = async () => {
        await Withdrawal();
        await Notes();
      };
      fetchData();
    }, 5000);

    return () => clearTimeout(delay);
  }, [amount]);
  const handleWithdraw =()=>{
      if (!amount || amount % 100 !== 0) {
    alert("Please enter an amount that is a multiple of 100.");
    return;
  }
     navigate("/Home");
    alert("Withdrawal successfully");
  }

  const handleHome = () => {
    navigate("/Home");
    
  };

  return (
    <div>
      <MainLayout>
        <ContainerDeposit
          placeholder={"Enter Withdraw Amount"}
          placeholder1={""}
          className={"cls2"}
          name={"Withdraw"}
          name1={"Withdraw Amount"}
          name2={`Balance Amount = ${balance ? balance.toFixed(2) : "0.00"}`}
          onClick={handleWithdraw}
          handleHome={handleHome}
          valueRs5000={getData?.Rs5000}
          valueRs1000={getData?.Rs1000}
          valueRs500={getData?.Rs500}
          valueRs100={getData?.Rs100}
          onChange={(e) => handleAmount(e)}
          classNamelab={"lab2"}
        ></ContainerDeposit>
      </MainLayout>
    </div>
  );
};

export default Withdraw;
