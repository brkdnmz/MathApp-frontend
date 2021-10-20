import {useEffect} from 'react';
import {mathjaxReRender, resizeElem} from "./util_funcs";
import $ from "jquery";

function ContentPreview(props) {
    useEffect(() => {
        const mj = window.MathJax;
        if(!mj) return;
        const buffer = $("#previewBuffer");
        buffer.html(props.bodyInput);
        const queue = mathjaxReRender("previewBuffer");
        queue.Push([updatePreview]);
    }, [props.bodyInput]);

    const updatePreview = () => {
        const preview = $("#contentPreview");
        const buffer = $("#previewBuffer");
        preview.html(buffer.html());
    }

    return (
        <>
            <div
                className={"container-fluid border border-2 border-dark rounded"}
                onChange={resizeElem}
                style={{
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    minHeight: "30px"
                }}
                id={"contentPreview"}
            />
            <div id={"previewBuffer"} className={"d-none"} />
        </>
    );
}

export default ContentPreview;