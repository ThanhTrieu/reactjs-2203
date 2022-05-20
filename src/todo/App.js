import React from 'react';
import LayoutTodo from "./components/Layout";
import InputTodo from "./components/Input";
import ButtonTodo from "./components/Button";
import ListTodo from "./components/List";
import FilterTodo from "./components/Filter";

class AppTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameWork: '',
            idTodo: 0,
            dataTodo: [],
            show: -1
            // [{id: 1, name: 'hoc HTML', done: false},{id: 2, name: 'hoc CSS', done: true}]
        }
    }

    changeNameWork = (event) => {
        // lay dc gia tri ma nguoi dung nhap vao o input
        let val = event.target.value;
        // cap nhat state
        this.setState({nameWork: val});
    }

    addTodoWork = () => {
        // add state nameWork vao state dataTodo
        let nameTodo = this.state.nameWork.trim();
        if(nameTodo.length > 0){
            // xu ly cap nhap state
            // xu ly id cong viec
            this.setState(state => ({ idTodo: state.idTodo + 1 }));
            // tao danh sach cong viec
            this.setState(state => ({dataTodo: [...state.dataTodo, {
                id: state.idTodo,
                name: state.nameWork,
                done: false
            }] }));
            // xoa bo ten cong viec da dc them vao list 
            this.setState({nameWork: ''});
        }
    }

    removeItem = (id) => {
        // can biet cong viec nao can xoa thong qua id cua no
        // [{id: 1, name: 'a'},{id: 2, name: 'b'}]; // id = 1
        // [{id: 2, name: 'b'}] - khong lam anh huong mang ban dau
        if(this.state.dataTodo.length > 0){
            // lay ra toan bo cong viec khong bi xoa
            let newData = this.state.dataTodo.filter(item => item.id !== id);
            // cap nhat lai state - loai tru bo cong viec can xoa
            this.setState({dataTodo: newData});
        }
    }

    finishedItem = (id) => {
        // can cap nhat thuoc done trong object array data todo ve true theo dung id cong viec
        // [{id: 1, name: 'a', done: false},{id: 2, name: 'b', done: false}] ; // id = 1
        // [{id: 1, name: 'a', done: true},{id: 2, name: 'b', done: false}]
        if(this.state.dataTodo.length > 0){
            let newTodo = this.state.dataTodo.map(item => {
                return item.id === id ? {...item, done: !item.done} : item;
            });
            this.setState({dataTodo: newTodo});
        }
    }

    filterItem = (event) => {
        let type = event.target.value;
        if(type === '1'){
            type = true;
        } else if(type === '0'){
            type = false;
        } else {
            type = -1;
        }
        this.setState({show: type});
    }

    render(){
        //console.log(this.state.dataTodo);
        return (
            <LayoutTodo>
                <InputTodo
                    val={this.state.nameWork}
                    type="text"
                    change={this.changeNameWork}
                />
                <ButtonTodo add={this.addTodoWork} type="button"> Add </ButtonTodo>
                {this.state.dataTodo.length > 0 && (
                    <div>
                        <FilterTodo change={this.filterItem} />
                    </div>
                )}
                <ListTodo
                    todo={this.state.dataTodo}
                    remove={this.removeItem}
                    finished={this.finishedItem}
                    show={this.state.show}
                />
            </LayoutTodo>
        )
    }
}
export default AppTodo;