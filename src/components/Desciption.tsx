interface Props{
    description: string,
}

function Description(props: Props){
    return <p className="text-[16px]">{props.description}</p>
}

export default Description;