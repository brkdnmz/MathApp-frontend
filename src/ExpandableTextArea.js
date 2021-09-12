import $ from "jquery";

function ExpandableTextArea(props) {
    const expandTextArea = (event) => {
        const textArea = $(event.target);
        if(textArea[0].clientHeight >= textArea[0].scrollHeight) return;
        textArea.css("height", "");
        textArea.css("height", textArea[0].scrollHeight + "px");
    }
    return (
        <textarea
            id={props.id}
            className={props.className}
            autoFocus={props.autoFocus}
            style={{overflow: "hidden", resize: "none"}}
            onChange={expandTextArea}
        />
    );
}

export default ExpandableTextArea;