function ContentTitle(props) {
    return (
        <div className={"accordion-header"}>
            <button
                className={"accordion-button collapsed d-block text-center"}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={props.dataBsTarget}
                style={{whiteSpace: "pre-wrap"}}
            >
                {props.title}
            </button>
        </div>
    );
}

export default ContentTitle;