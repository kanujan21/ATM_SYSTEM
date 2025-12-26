
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import './LabelInput.css'
type LabelInputProps={
    type?: "text"|"number";
    placeholder:string;
    placeholder1:string;
    onChange?:(e:any)=>void; 
    className:string;
    value?:string;
    name:string;
    onClick:()=>void;
}
const LabelInput:React.FC<LabelInputProps> = ({name,className,onChange,placeholder,value}) => {
  return (
    <div className='label-in'>
        
        <div>
             <div className="label-con">
                <div className='la'>
                    <Label name={name} className={"lab1"}></Label>
                </div>
                <div className='in'>
                    <Input placeholder={placeholder} onChange={onChange} className={className} type={"number"} value={value}></Input>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LabelInput