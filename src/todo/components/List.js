import PropTypes from 'prop-types';
import './style.css';

const ListTodo = ({ todo, remove, finished, show }) => {
    let classTodo = (show === -1) ? `item-todo item-all` : (!show ? `item-todo item-false` : `item-todo item-true`);
    return (
        <ul>
            {todo.map((item, index)=> (
                <li key={index} className={`${classTodo} show-${item.done}`}>
                    <span className={item.done ? 'done-active': ''} >{item.name}</span>
                    <span onClick={()=> remove(item.id)} > [delete]</span>
                    <span>
                        <input
                            type="checkbox"
                            onClick={()=> finished(item.id)}
                        />
                    </span>
                </li>
            ) )}
        </ul>
    )
}
ListTodo.propTypes = {
    todo: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    finished: PropTypes.func.isRequired
}
export default ListTodo;