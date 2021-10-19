function ContentBody(props) {
    return (
        <div id={props.id} className="accordion-collapse collapse">
            <div className="accordion-body" style={{whiteSpace: "pre-wrap"}}>
                    {props.body}
            </div>
        </div>
    );
}

export default ContentBody;