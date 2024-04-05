interface Props{
    src: string;
    srcSet: string;
}

function Image(props: Props){
    return <img 
    src={props.src} 
    srcSet={props.srcSet} 
    alt="main" 
    className=" absolute inset-0 w-full h-full object-cover object-center rounded-2xl"/>;
}

export default Image;