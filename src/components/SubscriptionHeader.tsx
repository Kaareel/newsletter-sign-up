interface Props{
    title: string,
}

function SubscriptionHeader(props: Props){
    return <p className="text-[16px]">{props.title}</p>
}

export default SubscriptionHeader;