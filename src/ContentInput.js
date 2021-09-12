import ExpandableTextArea from "./ExpandableTextArea";

function ContentInput(props) {

    return (
        <form className={"mt-3 mb-3"} onSubmit={props.onSubmit}>
            <div className={"row align-items-center justify-content-center"}>
                <div className={"input-group mb-3"}>
                    <label className={"input-group-text justify-content-center"} htmlFor={"contentTitle"}>Content Title</label>
                    <ExpandableTextArea
                        id={"contentTitle"}
                        className={"form-control p-1"}
                        autoFocus={true}
                    />
                </div>
                <div className={"input-group mb-3"}>
                    <label className={"input-group-text justify-content-center"} htmlFor={"contentBody"}>Content Body</label>
                    <ExpandableTextArea
                        id={"contentBody"}
                        className={"form-control p-1"}
                    />
                </div>
                <input className={"w-auto form-control border-success border-2 text-success"} type={"submit"} value={"Create"}/>
            </div>
        </form>
    );
}

export default ContentInput;