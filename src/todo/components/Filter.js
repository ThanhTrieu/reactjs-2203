

const FilterTodo = (props) => {
    return (
        <select onChange={props.change}>
            <option value=""> -- tat ca cong viec ---</option>
            <option value="1"> Hoan thanh</option>
            <option value="0"> Chua hoan thanh</option>
        </select>
    )
}
export default FilterTodo;