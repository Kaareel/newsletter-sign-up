import StartPage from "./pages/StartPage";
import SuccessPage from "./pages/SuccessPage";
import Footer from "./components/Footer";
import { useState } from "react";

type Pages = "start" | "thanks";

function App() {
	const [email, setEmail] = useState("");
	const [view, setView] = useState<Pages>("start");

	const goToSuccessPage = (email: string) => {
		setEmail(email);
		setView("thanks");
	};
	const goBack = () => {
		setEmail("");
		setView("start");
	};

	return (
		<div>
			{view === "start" && <StartPage goToSuccessPage={goToSuccessPage} />}
			{view === "thanks" && <SuccessPage email={email} goBack={goBack} />}
			<Footer
				text="Challenge by "
				link="Frontend Mentor"
				space="│"
				author="Coded by "
				profile="josh76543210"
			/>
		</div>
	);
}

export default App;
