import StartPage from "./components/page/StartPage";
import SuccessPage from "./components/page/SuccessPage";
import Footer from "./components/Footer";
import { useState } from "react";

type Pages = "start" | "thanks";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [view, setView] = useState<Pages>("start");

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function validate() {
    const newError: { [key: string]: string } = {
      email: "",
    };

    if (!email) {
      newError.email = "Email is required";
      console.log("error", newError);
    } else if (!validEmail(email)) {
      newError.email = "Email is invalid";
    } else {
      newError.email = "";
    }
    if (newError.email) {
      return newError;
    } else {
      setView("thanks");
      return newError;
    }
  }
  const goBack = () => {
    setEmail("");
    setView("start");
  }

  return (
    <div>
      {view === "start" && <StartPage  validate={validate} email={email} setEmail={setEmail} error={error} setError={setError}/>}
      {view === "thanks" && <SuccessPage email={email} goBack={goBack}/>}
      <footer >
          <Footer 
          text="Challenge by "
          link ="Frontend Mentor" 
          space="│" 
          author="Coded by "
          profile="josh76543210"/>
        </footer>
    </div>
  );
}

export default App;
