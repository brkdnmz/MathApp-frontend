function ContentBody(props) {
    return (
        <div id={props.id} className="accordion-collapse collapse">
            <div className="accordion-body">
                    {props.body}
            </div>
        </div>
    );
}

export default ContentBody;