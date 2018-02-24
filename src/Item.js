import React, { Component } from 'react';


export default class Item extends Component {

    edit(){
        const { id, editComponent } = this.props;
        editComponent(id);
    }

    render(){
        const { text } = this.props;
        return <div>
            <button onClick={ this.edit.bind(this) } >Edit</button>
            { text  }
        </div>
    }
    
}

