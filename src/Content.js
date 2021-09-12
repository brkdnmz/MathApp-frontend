import ContentTitle from "./ContentTitle";
import ContentBody from "./ContentBody";

function Content(props) {
    const content = props.content;
    return (
        <div
            className={"accordion-item"}
            onContextMenu={props.onRightClick}
            id={"content" + content.id}
        >
            <ContentTitle
                dataBsTarget={"#contentBody" + content.id}
                title={content.title}
            />
            <ContentBody
                id={"contentBody" + content.id}
                body = {content.body}
            />
        </div>
    );
}

export default Content;