import "./Input.css";
type InputProps = {
  type?: "text" | "number";
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  value?: string;
  min?: 0;
  readOnly?: boolean;
 
  
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  className,
  readOnly,

}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        min={0}
        readOnly={readOnly}
   
      />
    </div>
  );
};

export default Input;
