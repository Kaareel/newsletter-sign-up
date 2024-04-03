interface Props{
    text: string
}


function List(props: Props){
    return <li className="text-[16px]">{props.text}</li>
}

export default List;