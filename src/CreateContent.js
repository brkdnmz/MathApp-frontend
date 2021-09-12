import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentInput from "./ContentInput";
function CreateContent(props) {
    return(
        <>
            <ContentInput onSubmit={props.onContentInputSubmit} />
        </>
    );
}

export default CreateContent;