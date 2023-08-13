const Button = ({ text = "button",disabled = false ,onClick,classes, ...props }) => {
  
  if(disabled){
    return <button className="border-2 border-solid border-slate-500 px-5 py-2 rounded-full cursor-not-allowed bg-white text-gray-500">{text}</button>
  }
     
  return <button className={` border-2 border-solid border-blue-700 rounded-full bg-white hover:bg-blue-200 px-5 active:bg-blue-700 py-2 active:text-white text-blue-700 ${classes}`} onClick={onClick} {...props} >{text}</button>;
};

export default Button ;

