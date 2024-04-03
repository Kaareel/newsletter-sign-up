import Description from "./components/Desciption";
import List from "./components/List";
import Title from "./components/Title";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<{ [key: string]: string }>({});;

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeEmail = (e: any ) => {
    const value = e.target.value;
    setEmail(value);
  };

  function validate() {
    const newError: { [key: string]: string } = {
      email: ""
    }
    
    if (!email) {
      newError.email = "Email is required"
      console.log("error", newError)
    } else if (!validEmail(email)) {
      
      newError.email = "Email is invalid"
    } else {
      newError.email = "" 
    }
    return newError
   
  }
  

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const errors = validate();
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
  };

  return (
    <div className="bg-bgColor h-screen flex justify-center">
      <div className="bg-white grid gap-x-4 grid-cols-2 p-7 rounded-[3rem] full-page">
        <div></div>
        {/*<div className="flex flex-col gap-10 justify-center px-16 bg-red-100">
          <Title title="Stay updated!"/>
          <Description description="Join 60,000+ product managers receiving monthly updates on:"/>
          <ul>
            <List text="Product discovery and building what matters"/>
            <List text="Measuring to ensure updates are a success"/>
            <List text="And much more!"/>
          </ul>
          <form onSubmit={handleSubmit} noValidate className="relative">
          {error.email && <p className={`absolute text-red-500 right-0`}>{error.email}</p>}
            <Input onChange={handleChangeEmail} error={error.email} title="Email address" placeholder="email@company.com" />     
          <button type="submit">Subscribe to monthly newsletter</button>
          </form>
  </div>*/}
        <div className="">
        <img src="/illustration-sign-up-desktop.svg" alt="main" className=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
