import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentInput from "./ContentInput";
import CreateContentButton from "./CreateContentButton";
import $ from "jquery";
import axios from "axios";
import {useRef, useState} from "react";
import PreviewContentButton from "./PreviewContentButton";
import ContentPreview from "./ContentPreview";
function CreateContent(props) {
    const createContent = props.setContents;
    const contentInputRef = useRef();
    const [bodyInput, setBodyInput] = useState("");

    const onContentCreate = (event) => {
        const inputElem = $(contentInputRef.current);
        const titleElem = inputElem.find("#contentTitle");
        const bodyElem = inputElem.find("#contentBody");
        const title = titleElem.val().trim();
        const body = bodyElem.val().trim();
        if(!title) {
            alert("Content title must not be empty!");
            titleElem.val(null);
            titleElem.trigger("focus");
            if(!body) bodyElem.val(null);
            return;
        }else if(!body){
            alert("Content body must not be empty!");
            bodyElem.val(null);
            bodyElem.trigger("focus");
            if(!title) titleElem.val(null);
            return;
        }
        titleElem.val(null);
        bodyElem.val(null);
        var newContent = {title: title, body: body};
        axios
            .post(
                "https://brkdnmz-math-app.herokuapp.com/api/content/save",
                JSON.stringify(newContent),
                {headers: {'Content-Type': 'application/json'}}
            )
            .then(response => {
                newContent = response.data;
                createContent(newContent);
            })
            .catch(error => {
                console.log(error);
                event.preventDefault();
            });
    }

    const onContentPreview = () => {
        setBodyInput($(contentInputRef.current).find("#contentBody").val());
    }

    return(
        <>
            <div className={"mb-3"}>
                <ContentInput contentInputRef={contentInputRef} />
            </div>
            <div className={"d-flex justify-content-center mb-3"}>
                <div className={"d-flex btn-group col-md-6"}>
                    <CreateContentButton onClick={onContentCreate} />
                    <PreviewContentButton onClick={onContentPreview} />
                </div>
            </div>
            <div className={"mb-3"}>
                <ContentPreview bodyInput={bodyInput} />
            </div>
        </>
    );
}

export default CreateContent;