import Label from '../../Atoms/Label/Label';
import './LabelInput1.css';

type LabelInput1Props={
    type?: "text"|"number";
    placeholder:string;
    placeholder1:string;
    onChange:(e:any)=>void; 
    className:string;
    value?:string;
    name:string;
    name1:string;
    onClick:()=>void;
}
const LabelInput1:React.FC<LabelInput1Props> = ({name,name1}) => {
  return (
    <div className='la-in1'>
        <div className="laIn2">
        
            <Label name={name} className={"lab1"}></Label>   
            <Label name={name1} className={"lab1"}></Label>
        
        </div>

        
    </div>
  )
}

export default LabelInput1