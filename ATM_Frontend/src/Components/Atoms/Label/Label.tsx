import './Label.css'
type LabelProps={
    name:string;
    className:string;
}

const Label:React.FC<LabelProps> = ({name, className}) => {
  return (
    <div>
        <label className={className}>{name}</label>
    </div>
  )
}

export default Label