interface Props {
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: string;
}

function Input(props: Props) {
    console.log("error", props.error)
  return (
    <div className="flex flex-col">
      <label htmlFor="email">{props.title}</label>
      <input 
      type="email" 
      placeholder={props.placeholder} 
      className={`py-2.5 px-6 rounded-[10px] border   ${props.error ? "border-red-500 bg-red-100" : "border-current"} `}  onChange={props.onChange} />
      
      </div>
  );
}

export default Input;
