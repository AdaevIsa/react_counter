
function Buton (props) {
    

    return (
     <di className="conteyner">
           <button onClick={props.onClick}  className="button" style={{
            background: props.bg,
            onClick: props.onClick
        }}>{props.title}</button>
     </di>
    )
}
export default Buton