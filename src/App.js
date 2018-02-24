import React, {Component} from 'react';
import getTodo from './todo.js';
import Item from './Item.js';
class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: getTodo(),
            activeComponent: -1,
        }
    }

    editComponent(id) {
        this.setState({
            activeComponent: id,
        });
    }

    editText(){

    }

    deleteComponent(id) {

        var todos = this.state.todos;
        todos[id] = todos[id] + 'hello';
        this.setState({
            todos: todos,
        })

    }

    render() {
        console.log(this.state);
        var todos = this.state.todos;
        var todoList = todos.map((item, index) =>
            <Item
                key={index}
                id={index}
                text={item}
                editComponent={this.editComponent.bind(this)}

            />
        );
        var component = this;
        function editDiv(){
            var active = component.state.activeComponent;
            var activeComponent = component.state.todos[active];
            if(active > -1){
                return <input type="text" value={activeComponent} onChange={component.editText.bind(component)} />
            }
        }
        return (
            <div>
                <div>{editDiv()}</div>
                { todoList }
            </div>
        );
    }
}

export default App;
