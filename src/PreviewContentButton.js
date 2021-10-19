import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

function PreviewContentButton(props) {
    return (
        <button
            type={"button"}
            className={"btn border-primary border-2 text-primary"}
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faEye} />
        </button>
    );
}

export default PreviewContentButton;