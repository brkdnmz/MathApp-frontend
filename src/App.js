import CreateContent from './CreateContent';
import './index.css';
import ListContent from "./ListContent";
import {useEffect, useState} from "react";
import axios from "axios";
import $ from "jquery";

function App() {
    const [contents, setContents] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/content/all")
            .then(response => {
                setContents(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const onContentInputSubmit = (event) => {
        event.preventDefault();
        const form = $(event.target);
        const titleElem = form.find("#contentTitle");
        const bodyElem = form.find("#contentBody");
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
                "http://localhost:8080/api/content/save",
                JSON.stringify(newContent),
                {headers: {'Content-Type': 'application/json'}}
            )
            .then(response => {
                newContent = response.data;
                setContents(prevContents => [...prevContents, newContent]);
            })
            .catch(error => {
                 console.log(error);
                 event.preventDefault();
            });
    }

    const onContextMenuButtonClick = (changedContentId, operation) => {
        if(operation === "delete"){
            setContents(
                prevContents => prevContents.filter(content => {
                    // both of them must be guaranteed to be "int"
                    return changedContentId !== content.id;
                })
            );
        }
    };

    return (
        // style={{overflow: "overlay"}} -> scrollbar above content
        <div className={"d-flex justify-content-center vh-100"} style={{overflow: "overlay"}}>
            <div className={"d-flex flex-column col-md-6"} style={{marginTop: "5%"}}>
                <div className={"col-md-7 align-self-center"}>
                    <CreateContent onContentInputSubmit = {onContentInputSubmit} />
                </div>
                <div>
                    <ListContent contents = {contents} onContextMenuButtonClick={onContextMenuButtonClick} />
                </div>
            </div>
        </div>
    );
}

export default App;
