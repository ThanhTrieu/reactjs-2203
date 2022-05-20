import HeaderTodo from './Header';
import FooterTodo from './Footer';

const LayoutTodo = (props) => {
    return (
        <>
            <HeaderTodo/>
            <div className="content">
                {props.children}
            </div>
            <FooterTodo/>
        </>
    )
}
export default LayoutTodo;