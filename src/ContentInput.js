import AutoResizableTextArea from "./AutoResizableTextArea";

function ContentInput(props) {

    return (
        <div className={"row align-items-center justify-content-center"} ref={props.contentInputRef}>
            <div className={"input-group mb-3"}>
                <label className={"input-group-text justify-content-center"} htmlFor={"contentTitle"}>Content Title</label>
                <AutoResizableTextArea
                    id={"contentTitle"}
                    className={"form-control p-1"}
                    autoFocus={true}
                />
            </div>
            <div className={"input-group"}>
                <label className={"input-group-text justify-content-center"} htmlFor={"contentBody"}>Content Body</label>
                <AutoResizableTextArea
                    id={"contentBody"}
                    className={"form-control p-1"}
                    onContentBodyInputChange={props.onContentBodyInputChange}
                />
            </div>
        </div>
    );
}

export default ContentInput;