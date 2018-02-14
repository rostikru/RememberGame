export default class emailEngeen {

    constructor() {
        this.renderers = [];
    }

    registerRenderer(type, renderer) {
        this.renderers[type] = new renderer;
    }

    renderComponent(item) {
        return this.renderers[item.type].render(item);
    }


}
