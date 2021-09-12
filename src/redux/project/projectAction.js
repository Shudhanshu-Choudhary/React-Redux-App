import axios from "axios"
import { FETCH_PROJECT_DATA, FETCH_PROJECT_ERROR, FETCH_PROJECT_SUCCES } from "./projectTypes"

export const fetchProjectData = () => {
    return {
        type: FETCH_PROJECT_DATA
    }
}

export const fetchProjectSuccess = projects => {
    return {
        type: FETCH_PROJECT_SUCCES,
        payload: projects
    }
}

export const fetchProjectError = error => {
    return {
        type: FETCH_PROJECT_ERROR,
        payload: error
    }
}

export const fetchProjects = () => {
    return (dispatch) => {
        dispatch(fetchProjectData);
        axios.get('')
         .then(response => {
             const projects = response.data;
             dispatch(fetchProjectSuccess(projects));
         })
         .catch(error => {
             const errorMsg = error.message;
             dispatch(fetchProjectError(errorMsg));
         })
    }
}