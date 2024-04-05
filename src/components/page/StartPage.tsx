import Title from "../Title";
import Description from "../Desciption";
import List from "../List";
import Input from "../Input";
import Image from "../Image";
import { Dispatch, SetStateAction } from "react";


interface Props {
  validate: () => { [key: string]: string };
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  error: { [key: string]: string };
  setError: Dispatch<SetStateAction<{ [key: string]: string }>>;
}

function StartPage(props: Props) {
  const handleChangeEmail = (e: any) => {
    const value = e.target.value;
    props.setEmail(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const errors = props.validate();
    props.setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
  };

  return (
    <div className="bg-bgColor h-screen grid place-content-center">
      <div className="bg-white grid grid-cols-1 lg:gap-x-4 lg:grid-cols-7 lg:p-8 lg:rounded-[2rem] lg:full-page">
        <div className="lg:col-span-3 lg:relative lg:w-full lg:order-last">
          <Image
            src="/illustration-sign-up-desktop.svg"
            srcSet="/illustration-sign-up-desktop.svg 1x, /illustration-sign-up-mobile.svg 2x"
          />
        </div>
        <div className="col-span-4 justify-center px-16">
          <div className="flex flex-col gap-8 justify-center my-10">
            <Title
              title="Stay updated!"
              className="text-textColor text-[56px] fond-bond"
            />
            <Description description="Join 60,000+ product managers receiving monthly updates on:" />
            <ul className="list-inside grid gap-2">
              <List text="Product discovery and building what matters" />
              <List text="Measuring to ensure updates are a success" />
              <List text="And much more!" />
            </ul>
            <form onSubmit={handleSubmit} noValidate className="relative">
              {props.error.email && (
                <p className={`absolute text-red-500 right-0`}>
                  {props.error.email}
                </p>
              )}
              <Input
                onChange={handleChangeEmail}
                error={props.error.email}
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
