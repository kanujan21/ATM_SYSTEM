import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../Atoms/Button/Button";
import Label from "../../Atoms/Label/Label";
import MainLayout from "../../Templates/MainLayout";
import "./Transaction.css";
import { useAuth } from "../../../context/AuthContext";

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
const Transaction = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [historyList, setHistoryList] = useState<list[]>([]);
  const transaction = async () => {
    const res = await fetch(
      `http://localhost:8080/ATM_System/Transaction?cartNo=${user?.cartNo}`
    );
    if (res.ok) {
      const data: list[] = await res.json();
      const mapped = data.map((k) => ({
        id: k.id,
        cartNo: k.cartNo,
        date: k.date,
        amount: k.amount,
        Rs5000: k.Rs5000,
        Rs1000: k.Rs1000,
        Rs500: k.Rs500,
        Rs100: k.Rs100,
        action: k.action,
      }));
      setHistoryList(mapped);
    }
  };
  useEffect(() => {
    transaction();
  }, []);
  const handleHome = () => {
    navigate("/Home");
  };

  return (
    <div>
      <MainLayout>
        <div className="history-cont">
          <div className="his-div">
            <div>
              <Label name={"Transaction History"} className={"lab"}></Label>
            </div>
            <div className="tab">
              <table className="table-con">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Rs5000</th>
                    <th>Rs1000</th>
                    <th>Rs500</th>
                    <th>Rs100</th>
                  </tr>
                </thead>
                <tbody>
                  {historyList.map((k) => (
                    <tr
                      key={k.id}
                      className={
                        k.action.toLowerCase() === "withdrawal"
                          ? "withdraw-row"
                          : k.action.toLowerCase() === "deposit"
                          ? "deposit-row"
                          : ""
                      }
                    >
                      <td>{k.date}</td>
                      <td>{k.action}</td>
                      <td>{k.amount}</td>
                      <td>{k.Rs5000}</td>
                      <td>{k.Rs1000}</td>
                      <td>{k.Rs500}</td>
                      <td>{k.Rs100}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Button
                onClick={handleHome}
                className={"btn2"}
                name1={"Home"}
              ></Button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Transaction;
