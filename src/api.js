import axios from "axios";

export function getAllContents(){
    return axios
        .get("https://brkdnmz-math-app.herokuapp.com/api/content/all")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

export function deleteContent(contentId){
    return axios
        .delete(`https://brkdnmz-math-app.herokuapp.com/api/content/${contentId}/delete`)
        .then()
        .catch(error => {
            throw error;
        });
}

export function addContent(newContent){
    return axios
        .post(
            "https://brkdnmz-math-app.herokuapp.com/api/content/save",
            JSON.stringify(newContent),
            {headers: {'Content-Type': 'application/json'}}
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}