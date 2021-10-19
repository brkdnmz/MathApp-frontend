import $ from "jquery";

export const resizeElem = (event) => {
    const elem = $(event.target);
    elem.css("height", "");
    const marginBorderHeight = elem.outerHeight() - elem.innerHeight();
    const expandedHeight = elem[0].scrollHeight + marginBorderHeight;
    elem.css("height", expandedHeight + "px");
}

export const mathjaxReRender = (elemId) => {
    const mj = window.MathJax;
    if(!mj) return;
    if(!mj.Callback || !mj.Hub) return;
    var q;
    if (elemId)
        q = mj.Callback.Queue(["Typeset", mj.Hub, elemId]);
    else
        q = mj.Callback.Queue(["Typeset", mj.Hub]);
    return q;
}