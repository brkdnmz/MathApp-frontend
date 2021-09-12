import {useEffect, useRef, useState} from "react";
import $ from "jquery";
import ContentRightClickMenu from "./ContentRightClickMenu";
import Content from "./Content";

function ListContent(props) {
    const contents = props.contents;
    const [rightClickedContent, setRightClickedContent] = useState();
    useEffect(() => {
        const hub = window.MathJax.Hub;
        if(hub)
            hub.Queue(["Typeset", hub]);
    });
    const contextMenuRef = useRef();

    /* Custom context menu for modifying / deleting contents */
    const onRightClick = (event) => {
        event.preventDefault();
        const content = event.currentTarget;
        const contextMenu = $(contextMenuRef.current);
        contextMenu.css("top", event.clientY + "px")
            .css("left", event.clientX + "px");
        contextMenu.attr("hidden", false);
        setRightClickedContent(content);
    };

    return (
        <>
            {
                contents.map((content, i) => {
                    return (
                        <Content content={content} onRightClick={onRightClick} key={content.id} />
                    );
                })
            }
            <ContentRightClickMenu
                content={rightClickedContent}
                id={"contentRightClickMenu"}
                contextMenuRef={contextMenuRef}
                onContextMenuButtonClick={props.onContextMenuButtonClick}
            />
        </>
    );
}

export default ListContent;