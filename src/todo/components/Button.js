

const ButtonTodo = (props) => {
    return (
        <button onClick={()=>props.add()} type={props.type}> {props.children} </button>
    )
}
export default ButtonTodo;