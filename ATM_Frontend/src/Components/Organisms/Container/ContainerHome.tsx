
import { href } from "react-router-dom";
import Button from "../../Atoms/Button/Button";
import Label from "../../Atoms/Label/Label";
import NavLink from "../../Atoms/Nav_Link/NavLink";
import './ContainerHome.css'
type ContainerHomeProps={
    type?: "text"|"number";
    placeholder:string;
    placeholder1:string;
    onChange:(e:any)=>void; 
    className:string;
    value?:string;
    name:string;
    name1:string;
    name2:string;
    onClick:()=>void;
    onClick1:()=>void;
    onClick2:()=>void;
    href:string;
}

const ContainerHome:React.FC<ContainerHomeProps> = ({name,name2, href, onClick, onClick1,onClick2}) => {
  return (
    <div className="home-wrapper">
        <div className="home-card">
            <div className="header-section">
                <Label name={name} className={"lab"}></Label>
            </div>
        <div>
        <div className="button-label-content">
          <div className="label-section">
                <Label name={name2} className={"lab5"}></Label>
          </div>
        <Button onClick={onClick} className={"btn"} name1={"Deposit"} ></Button>
        <Button onClick={onClick1} className={"btn"} name1={"Withdrawal"} ></Button>
        <Button onClick={onClick2} className={"btn"} name1={"Transaction History"} ></Button>
        </div>
        </div>
            <div className="logout-section">
                <NavLink name={"Logout"} href={href} className={"a"}></NavLink>
            </div>
        </div>
    </div>
  )
}

export default ContainerHome