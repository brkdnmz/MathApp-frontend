import axios from "axios";

const API_URL = "https://brkdnmz-math-app-backend.herokuapp.com/api/";
function createUrl(suffix){
    return API_URL + suffix;
}
export function getAllContents(){
    return axios
        .get(createUrl("content/all"))
        .then(response => {
            console.log("getAllContents successful");
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

export function deleteContent(contentId){
    return axios
        .delete(createUrl(`content/${contentId}/delete`))
        .then(() => {
            console.log("deleteContent successful");
        })
        .catch(error => {
            throw error;
        });
}

export function addContent(newContent){
    return axios
        .post(
            createUrl("content/save"),
            JSON.stringify(newContent),
            {headers: {'Content-Type': 'application/json'}}
        )
        .then(response => {
            console.log("addContent successful");
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}