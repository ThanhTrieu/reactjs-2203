import React from 'react';
import Children from  './Children';

class ParentComponent extends React.Component {
    // 1 - mounting : component dc khoi tao
    constructor(props) {
        super(props);
        // day la phuong thuc chay dau tien trong giai doan mounting
        // chi chay duy nhat 1 lan
        // thong thuong se la noi khai bao state
        this.state = {
            count : 0,
            color : 'red',
            show: true
        }
        console.log(`constructor ParentComponent - Mounting running`);
        console.log('**********************************')
    }
    static getDerivedStateFromProps(props, state){
        // props: truyen vao component
        // state: khai bao o constructor (state ban dau)
        // thong thuong se dung de thay doi state theo props
        // phuong thuc nay chay truoc render
        // chay ca 2 giai doan : Mounting - Updating
        console.log('props getDerivedStateFromProps', props);
        console.log('state getDerivedStateFromProps', state);
        console.log('getDerivedStateFromProps ParentComponent - Mounting / updating running')
        console.log('**********************************')
        return null;
    }

    componentDidMount() {
        // chi chay 1 lan duy nhat trong giai doan mounting
        // chay cuoi cung trong giai doan mounting
        // thay doi state
        // call api - tuong tac dom
        console.log('componentDidMount ParentComponent - Mounting running')
        console.log('**********************************')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('state ban dau truoc khi thay doi', this.state.count);
        // se kiem soat viec rennder lai component hay ko
        // tra ve true thi se render lai - tra ve false thi ko
        // kiem tra props va nextPops hay state va nextState co khac nhau thi thi render lai
        // hoac kiem tra nextProps vs nextState co su khac nhau
        console.log('shouldComponentUpdate ParentComponent - updating running');
        // khi dung phuong thuc nay thi ko ke thua de PureComponent (ban chat PureComponent da co san)
        if(this.state.count !== nextState.count){
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('getSnapshotBeforeUpdate ParentComponent - updating running');
        return 'blue';
        // ham bo tro gia tri cho componentDidUpdate
        // khi khai bao getSnapshotBeforeUpdate can khai bao componentDidUpdate di kem
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('componentDidUpdate ParentComponent - updating running');
        // snapshot: ket qua cua getSnapshotBeforeUpdate tra ve
        // chay cuoi cung cua updating
        // tuong tac dom - giao dien da hien thi het roi
        document.getElementById('title').style.color = snapshot;
        //this.setState({color: 'blue'});
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
            color: 'yellow',
            show: false
        });
    }

    render(){
        // hien thi giao dien
        // render co the se chay lai nhieu lan - phu thuoc vao su thay doi state hay props
        // chay ca 2 giai doan mounting - updating
        console.log('render ParentComponent - Mounting / updating running');
        console.log('**********************************')
        return (
            <>
                <h2 id="title" style={{color: this.state.color}}>{this.state.count}</h2>
                { this.state.show && <Children/> }
                <button onClick={() => this.changeCount()}> + </button>
            </>
        )
    }
}

export default ParentComponent;