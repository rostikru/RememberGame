export default class EmailEngineButtonRenderer {
    render(item) {
        return `<button style="
                background: ${item.props.background}; 
                font-size: ${item.props.font_size};  
                color: ${item.props.color};
                font-weight: ${item.props.font_weight};
                width: ${item.props.width};
                padding: ${item.props.padding};
                border-style: ${item.props.border_style};
                border-width: ${item.props.border_width};
                border-color: ${item.props.border_color};
                text-align: ${item.props.text_align};
                border-radius: ${item.props.borderRadius};
                margin: ${item.props.margin};
                ">${item.props.text}</button>`;
    }
}
