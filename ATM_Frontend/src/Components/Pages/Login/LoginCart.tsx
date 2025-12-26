import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import MainLayout from "../../Templates/MainLayout";
import Label from "../../Atoms/Label/Label";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import './LoginCart.css'


const LoginCart = () => {
  const navigate = useNavigate();
  const test = useAuth();
  const [cartNo, setCartNo] = useState<string>('');
  const [pin, setpin] = useState<string>('');

  const login = async () => {
    try {
      const payload = {
        cartNo: Number(cartNo),
        pin: Number(pin)
      };
      const res = await fetch("http://localhost:8080/ATM_System/LoginCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      // const result = await res.json();
      // console.log(result);
      
      if(res.ok){
        test.login(Number(cartNo), Number(pin));
        navigate("/Home");
        alert('Login SuccessFul');
      }
      else{
        alert('Invalid Cart Number or Pin');
      }
    } catch (err) {
      alert('error');
      console.log(err);
    }
  };

  return (
    <div>
      <MainLayout>
        <div className="login-wrapper">
          <div className="login-card">
            <Label name={"Bank ATM System"} className={"lab"}></Label>
            <div>
              <div className="input-label-container">
                <div className="label-section">
                  <Label name={"Login"} className={"lab5"}></Label>
                </div>
                <Input
                  placeholder={"Enter Cart Number "}
                  className={"cls"}
                  type={"number"}
                  value={cartNo}
                  onChange={(e)=>setCartNo((e.target.value))}
                ></Input>
                <Input
                  placeholder={"Enter Pin "}
                  className={"cls"}
                  type={"number"}
                  value={pin}
                  onChange={(e)=>setpin((e.target.value))}
                ></Input>
                <Button
                  className={"btn"}
                  name1={"Login"}
                  onClick={()=>login()}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default LoginCart;
