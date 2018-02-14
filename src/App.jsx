import React, {Component} from 'react';
import  DefaultComponents from "./includes/DefaultComponents.js";
import  emailEngineColumnRenderer  from "./EmailEngeen/emailEngineColumnRenderer.js";
class App extends Component {
    constructor() {
        super();
        this.emailEngineColumnRenderer = new emailEngineColumnRenderer();
    }

    render() {
        var output = this.emailEngineColumnRenderer.renderColumn(DefaultComponents);
        return (
            <div dangerouslySetInnerHTML={{__html: output}}>
            </div>
        );
    }
}
export default App;
