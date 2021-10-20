import CreateContent from './CreateContent';
import './index.css';
import ListContent from "./ListContent";
import {useEffect, useState} from "react";
import {getAllContents} from "./api";

function App() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        getAllContents()
            .then(allContents => {
                setContents(allContents);
            })
            .catch(error => {
                console.log(error);
            })
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
            /* TODO */
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
