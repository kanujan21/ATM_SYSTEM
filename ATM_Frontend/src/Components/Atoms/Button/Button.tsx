import './Button.css'
type ButtonProps={
    name1?:string;
    onClick:()=>void;
    className:string;
}

const Button:React.FC<ButtonProps> =({name1, onClick,className})=>{
    return(
        <div>
            <button onClick={onClick} className={className}>{name1}</button>
        </div>
    )
}

export default Button