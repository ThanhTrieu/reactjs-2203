import React from "react";

class HeaderTodo extends React.PureComponent {
    render() {
        console.log('header component render');
        return (
            <h1> To do App</h1>
        )
    }
}
export default HeaderTodo;

// const HeaderTodo = () => {
//     console.log('header component render');
//     return (
//         <h1> To do App</h1>
//     )
// }
// export default React.memo(HeaderTodo);