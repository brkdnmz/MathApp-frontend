import {resizeElem} from "./funcs";

function AutoResizableTextArea(props) {
    return (
        <textarea
            id={props.id}
            className={props.className}
            autoFocus={props.autoFocus}
            style={{overflow: "hidden", resize: "none"}}
            onChange={(event) => {
                resizeElem(event);
                if(props.onContentBodyInputChange)
                    props.onContentBodyInputChange(event);
            }}
        />
    );
}

export default AutoResizableTextArea;