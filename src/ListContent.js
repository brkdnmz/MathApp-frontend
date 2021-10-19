import {useEffect, useRef, useState} from "react";
import $ from "jquery";
import ContentRightClickMenu from "./ContentRightClickMenu";
import Content from "./Content";
import {mathjaxReRender} from "./funcs";

function ListContent(props) {
    const contents = props.contents;
    const [rightClickedContent, setRightClickedContent] = useState();
    useEffect(() => {
        //mathjaxReRender();
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
                updateContents={props.updateContents}
            />
        </>
    );
}

export default ListContent;