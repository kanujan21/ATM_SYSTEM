import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import './ContainerLogin.css'
type ContainerLoginProps={
    type?: "text"|"number";
    placeholder:string;
    placeholder1:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;  
    className:string;
    value?:string;
    name:string;
    name1:string;
    name2:string;
    onClick:()=>void;
}

const ContainerLogin:React.FC<ContainerLoginProps> = ({name,name1, onClick,value, name2,placeholder,placeholder1,onChange,type}) => {
  return (
    <div className="login-wrapper">
        <div className="login-card">
            <Label name={name} className={"lab"}></Label>
        <div>
             <div className="input-label-container">
            <div className="label-section">
                <Label name={name2} className={"lab5"}></Label>
            </div>
        <Input placeholder={placeholder} onChange={onChange} className={"cls"} type={type} value={value}></Input>
        <Input placeholder={placeholder1} onChange={onChange} className={"cls"} type={type} value={value}></Input>
        <Button onClick={onClick} className={"btn"} name1={name1} ></Button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ContainerLogin