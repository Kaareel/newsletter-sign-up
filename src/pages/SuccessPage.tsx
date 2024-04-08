import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

interface Props {
  email: string;
  goBack: () => void;
}

function SuccessPage(props: Props) {
  return (
    <div className="bg-bgColor h-screen lg:place-content-center">
      <div className="lg:flex lg:items-center lg:justify-center ">
        <div className="bg-white lg:flex lg:flex-col lg:gap-5 lg:max-w-[500px] lg:mt-3 lg:px-[90px] lg:py-[70px] lg:rounded-[2rem] success-card w-full ">
          <img
            src="/icon-success.svg"
            alt="main"
            className="w-[64px] h-[64px]"
          />
          <Title title="Thanks for subscribing!" className=" text-textColor text-6xl fond-bond"/>
          <Paragraph
            text="A confirmation email has been sent to"
            fragment={`${props.email}`}
            segment=". Please open it and click the button inside to confirm your subscription."
          />
          <button
            className="bg-textColor w-full text-white mt-2.5 p-5 rounded-[10px] bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
            onClick={props.goBack}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
