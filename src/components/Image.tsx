interface Props{
    src: string;
    srcSet: string;
}

function Image(props: Props){
    return <img 
    src={props.src} 
    srcSet={props.srcSet} 
    alt="main" 
    className=" lg:absolute lg:inset-0 w-full lg:h-full lg:w-full lg:object-cover lg:object-center lg:rounded-2xl"/>;
}

export default Image;