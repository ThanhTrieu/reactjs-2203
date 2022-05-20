
const InputTodo = (props) => {
    return (
        <input
            value={props.val}
            onChange={props.change}
            type={props.type}
        />
    )
}
export default InputTodo;