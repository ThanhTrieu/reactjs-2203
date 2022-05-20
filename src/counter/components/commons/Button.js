import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
    // props tham so nhan toan bo props truyen vao component
    return (
        <button
            className={props.className}
            type={props.type}
            name={props.name}
            onClick={()=> props.click(props.name)}
        >
            {props.children}
        </button>
    )
}
ButtonComponent.defaultProps = {
    // gan gia tri mac dinh cho props
    name: "increment"
}

ButtonComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default ButtonComponent;