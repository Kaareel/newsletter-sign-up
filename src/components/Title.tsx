interface Props {
    title: string,
}

function Title(props: Props) {
    return <h1 className="text-textColor text-5xl fond-bond ">{props.title}</h1>
}

export default Title;