import Paragraph from "../Paragraph";
import Title from "../Title";

interface Props {
  email: string;
  goBack: () => void;
}

function SuccessPage(props: Props) {
  return (
    <div className="bg-bgColor h-screen">
      <div className="flex justify-center ">
        <div className="bg-white flex flex-col gap-5 max-w-[500px] mt-3 px-[90px] py-[70px] rounded-[2rem]">
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
            className="bg-textColor w-full rounded-[10px] text-white mt-2.5 p-5 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
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
