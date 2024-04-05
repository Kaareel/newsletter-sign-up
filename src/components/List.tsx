import Icon from "./Icon";
interface Props{
    text: string
}


function List(props: Props){
    return <li className="text-[16px] flex"><Icon/>{props.text}</li>
}

export default List;