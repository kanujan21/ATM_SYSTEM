import { useNavigate } from "react-router-dom";
import MainLayout from "../Templates/MainLayout";
import ContainerDeposit from "../Organisms/Container/ContainerDeposit";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>();
  const [fivethousand, setFivethousand] = useState<number>();
  const [thousand, setThousand] = useState<number>();
  const [fivehundred, setFivehundred] = useState<number>();
  const [hundred, setHundred] = useState<number>();
  const [total, setTotal] = useState<number>();
  const { user } = useAuth();
  console.log(user?.cartNo);

  console.log("amount:", amount);
console.log("5000:", fivethousand);
console.log("1000:", thousand);
console.log("500:", fivehundred);
console.log("100:", hundred);


  const payload = {
        cartNo: user?.cartNo,
        amount: amount,
        Rs5000: fivethousand,
        Rs1000: thousand,
        Rs500: fivehundred,
        Rs100: hundred,
        action: "Deposit",
      }

  const deposit = async () => {
     const calculated =
        Number(fivethousand) * 5000 +
        Number(thousand) * 1000 +
        Number(fivehundred) * 500 +
        Number(hundred) * 100;
      setTotal(calculated);
      console.log(calculated);
      
      if (calculated !== Number(amount)) {
        alert(
          `Different between amount and total: Rs. ${
            Number(amount) - calculated
          }`
        );
        return;
      }
    try {
      const res = await fetch("http://localhost:8080/ATM_System/Deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert("Deposit Successfully");
        navigate("/Home");
      } else {
        alert("Deposit Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during deposit");
    }
  };
  const handleHome = () => {
    navigate("/Home");
  };
  
  return (
    <div>
      <MainLayout>
        <ContainerDeposit
          placeholder={"Enter Deposit Amount"}
          value={amount}
          valueRs5000={fivethousand}
          valueRs1000={thousand}
          valueRs500={fivehundred}
          valueRs100={hundred}
          onChange={(e) => setAmount(Number(e.target.value))}
          handleRs5000={(e) => setFivethousand(Number(e.target.value))}
          handleRs1000={(e) => setThousand(Number(e.target.value))}
          handleRs500={(e) => setFivehundred(Number(e.target.value))}
          handleRs100={(e) => setHundred(Number(e.target.value))}
          className={"cls2"}
          name={"Deposit"}
          name1={"Deposit"}
          name2={"Amount"}
          onClick={deposit}
          handleHome={handleHome}
          placeholder1={""} classNamelab={"lab4"}          
        ></ContainerDeposit>
      </MainLayout>
    </div>
  );
};

export default Deposit;
