import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import LabelInput from "../../Molecules/LabelInput/LabelInput";
import "./ContainerDeposit.css";
type ContainerDepositProps = {
  type?: "text" | "number";
  placeholder: string;
  placeholder1: string;
  onChange: (e: any) => void;
  handleRs5000?: (e: any) => void;
  handleRs1000?: (e: any) => void;
  handleRs500?: (e: any) => void;
  handleRs100?: (e: any) => void;
  className: string;
  classNamelab: string;
  value?: any;
  valueRs5000?: any;
  valueRs1000?: any;
  valueRs500?: any;
  valueRs100?: any;
  name: string;
  name1: string;
  name2: string;
  onClick: () => void;
  handleHome: () => void;
 
};

const ContainerDeposit: React.FC<ContainerDepositProps> = ({
  name,
  name1,
  name2,
  value,
  valueRs5000,
  valueRs1000,
  valueRs500,
  valueRs100,
  onClick,
  handleHome,
  placeholder,
  onChange,
  handleRs100,
  handleRs1000,
  handleRs500,
  handleRs5000,
  className,
  classNamelab,

}) => {
  return (
    <div className="Deposit-wrapper">
      <div className="Deposit-container">
        <Label name={name} className={"lab"}></Label>
        <div>
          <div className="deposit-label-input">
            <div className="deposit-lab">
              <Label name={name2} className={classNamelab}></Label>
            </div>
            <Input
              placeholder={placeholder}
              onChange={onChange}
              className={"cls"}
              type={"number"}
              value={value}
            
            ></Input>
            <div>
              <div className="deposit-label">
                <div className="label-container">
                  <Label name={"Notes"} className={"lab3"}></Label>
                </div>

                <Label name={"Number of Notes"} className={"lab3"}></Label>
              </div>
            </div>

            <div>
              <LabelInput
                placeholder={""}
                placeholder1={""}
                onChange={handleRs5000}
                className={className}
                name={"5000"}
                onClick={onClick}
                type={"number"}
                value={valueRs5000}
              ></LabelInput>
              <LabelInput
                placeholder={""}
                placeholder1={""}
                onChange={handleRs1000}
                className={className}
                name={"1000"}
                onClick={onClick}
                type={"number"}
                value={valueRs1000}
              ></LabelInput>
              <LabelInput
                placeholder={""}
                placeholder1={""}
                onChange={handleRs500}
                className={className}
                name={"500"}
                onClick={onClick}
                type={"number"}
                value={valueRs500}
              ></LabelInput>
              <LabelInput
                placeholder={""}
                placeholder1={""}
                onChange={handleRs100}
                className={className}
                name={"100"}
                onClick={onClick}
                type={"number"}
                value={valueRs100}
              ></LabelInput>
            </div>
            <Button onClick={onClick} className={"btn"} name1={name1}></Button>
          </div>
        </div>
        <Button onClick={handleHome} className={"btn2"} name1={"Home"}></Button>
      </div>
    </div>
  );
};

export default ContainerDeposit;
