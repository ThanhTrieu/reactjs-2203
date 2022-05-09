
const ButtonComponent = (props) => {
    // props tham so nhan toan bo props truyen vao component
    return (
        <button
            className={props.className}
            type={props.type}
            name={props.name}
            onClick={()=> props.click()}
        >
            {props.children}
        </button>
    )
}
export default ButtonComponent;