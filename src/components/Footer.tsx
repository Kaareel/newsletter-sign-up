interface Props {
  text: string;
  space: string;
  author: string;
  link: string;
  profile: string;
}

function Footer(props: Props){
    return (
        <div className="flex space-x-4 justify-center bg-bgColor text-white text-xs py-4">
            <p>{props.text}<a href="https://www.frontendmentor.io/home">{props.link}</a></p>
            <p>{props.space}</p>
            <p>{props.author}<a href="https://www.frontendmentor.io/profile/josh76543210">{props.profile}</a></p>
        </div>
    )
}

export default Footer;