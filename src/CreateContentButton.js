import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function CreateContentButton(props) {
    return (
        <button
            type={"button"}
            className={"btn border-success border-2 text-success"}
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}

export default CreateContentButton;