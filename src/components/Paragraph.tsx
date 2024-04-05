interface Props {
  text: string;
  fragment: string;
  segment: string;
}

function Paragraph(props: Props) {
    
  return (
    <p>
      {props.text}
      <span className="font-bold"> {props.fragment}</span>
      {props.segment}
    </p>
  );
}

export default Paragraph;
