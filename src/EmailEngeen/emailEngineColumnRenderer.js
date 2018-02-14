import  emailEngeen from "./emailEngeen.js";
import  emailEngineButtonRenderer from "./emailEngineButtonRenderer.js";
export default class EmailEngineColumnRenderer {

    constructor() {
        this.emailEngeen = new emailEngeen();
        this.emailEngeen.registerRenderer('EditableButton', emailEngineButtonRenderer);
    }

    renderColumn(json) {
        return json.map(item => this.emailEngeen.renderComponent(item));
    }


}