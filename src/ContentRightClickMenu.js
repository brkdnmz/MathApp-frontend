import $ from "jquery";
import {deleteContent} from "./api";

function ContentRightClickMenu(props) {
    const content = props.content;

    const onButtonClick = (event) => {
        const button = $(event.currentTarget);
        const idPrefix = "content";
        const contentId = parseInt(content.id.slice(idPrefix.length));
        const operation = button.val();
        if(operation === "delete"){
            deleteContent(contentId)
                .then()
                .catch(error => {
                    console.log(error);
                });
        }else if(operation === "edit"){
            /* TODO */
        }
        props.updateContents(contentId, operation);
    };

    return (
        <ul
            id={props.id}
            ref={props.contextMenuRef}
            className={"list-group"}
            style={{zIndex: "2000", position: "absolute"}}
            hidden={true}
        >
            <button
                type={"button"}
                className={"list-group-item list-group-item-action list-group-item-danger"}
                value={"delete"}
                onClick={onButtonClick}
            >
                Delete
            </button>
            <button
                type={"button"}
                className={"list-group-item list-group-item-action list-group-item-warning"}
                value={"edit"}
                onClick={onButtonClick}
            >
                Modify
            </button>
        </ul>
    );
}

export default ContentRightClickMenu;