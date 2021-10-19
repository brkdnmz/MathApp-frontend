import CreateContent from './CreateContent';
import './index.css';
import ListContent from "./ListContent";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios
            .get("https://brkdnmz-math-app.herokuapp.com/api/content/all")
            .then(response => {
                setContents(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const updateContents = (contentId, operation) => {
        if(operation === "delete"){
            setContents(
                prevContents => prevContents.filter(content => {
                    // both of them must be guaranteed to be "int"
                    return contentId !== content.id;
                })
            );
        }else if(operation === "edit"){

        }
    }

    return (
        // style={{overflow: "overlay"}} -> scrollbar above content
        <div className={"d-flex justify-content-center vh-100"} style={{overflow: "overlay"}}>
            <div className={"d-flex flex-column col-md-6"} style={{marginTop: "20vh"}}>
                <CreateContent
                    setContents={
                        newContent => {
                            setContents(prevContents => [...prevContents, newContent])
                        }
                    }
                />
                <div>
                    <ListContent
                        contents={contents}
                        updateContents={updateContents}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
