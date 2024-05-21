import Title from "../components/Title";
import SubscriptionHeader from "../components/SubscriptionHeader";
import List from "../components/List";
import Input from "../components/Input";
import Image from "../components/Image";
import { useState } from "react";

interface Props {
	goToSuccessPage: (email: string) => void;
}

function StartPage(props: Props) {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleChangeEmail = (e: any) => {
		const value = e.target.value;
		setEmail(value);
	};
	const validEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	function validate(email: string) {
		let newError = "";

		if (!email) {
			newError = "Email is required";
		} else if (!validEmail(email)) {
			newError = "Email is invalid";
		}
		return newError;
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleSubmit = (event: any) => {
		event.preventDefault();
		const error = validate(email);
		setError(error);
		if (!error) {
			props.goToSuccessPage(email);
		}
	};

	return (
		<div className="bg-bgColor h-screen lg:grid lg:place-content-center">
			<div className="bg-white grid grid-cols-1 lg:gap-x-4 lg:grid-cols-7 lg:p-8 lg:rounded-[2rem] lg:full-page">
				<div className="lg:col-span-3 lg:relative lg:w-full lg:order-last ">
					<Image
						src="/illustration-sign-up-mobile.svg"
						srcSet="/illustration-sign-up-mobile.svg 2x"
					/>
				</div>
				<div className="lg:col-span-4 justify-center lg:px-16">
					<div className="flex flex-col gap-7 justify-center lg:my-10 py-8 px-5">
						<Title
							title="Stay updated!"
							className="text-textColor text-[56px] fond-bond"
						/>
						<SubscriptionHeader title="Join 60,000+ product managers receiving monthly updates on:" />
						<ul className="list-inside grid gap-2">
							<List text="Product discovery and building what matters" />
							<List text="Measuring to ensure updates are a success" />
							<List text="And much more!" />
						</ul>
						<form onSubmit={handleSubmit} noValidate className="lg:relative">
							{error && (
								<p className="absolute text-red-500 font-bold lg:right-0 right-6">
									{error}
								</p>
							)}
							<Input
								onChange={handleChangeEmail}
								error={error}
								title="Email address"
								placeholder="email@company.com"
							/>
							<button
								type="submit"
								className="bg-textColor w-full text-white mt-2.5 p-5 rounded-[10px] bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
							>
								Subscribe to monthly newsletter
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartPage;
