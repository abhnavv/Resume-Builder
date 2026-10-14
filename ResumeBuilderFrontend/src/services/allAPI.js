import apiService from "../api/apiService";

//all api call for add resume,called by steps components

export const addResumeAPI=async(reqBody)=>{
    return await apiService("POST",`/allResumes`,reqBody)
}

//api call for getting a single resume, called by view resume when page loaded
export const getSingleResumeAPI=async(id)=>{
    return await apiService("GET",`allResumes/${id}`,{})
}

//api call for downloading the resume created
export const downloadResumeAPI=async(reqBody)=>{
    return await apiService("POST",'/history',reqBody)
}

//api call for editing the resume created
export const editResumeAPI=async(id,reqBody)=>{
    return await apiService("PUT",`/allResumes/${id}`,reqBody)
}

//api call for getting  the resume dwonloaded history
export const getHistoryAPI=async()=>{
    return await apiService("GET",`/history`,{})
}


//api call for delete the resume created
export const deleteHistoryAPI=async(id)=>{
    return await apiService("DELETE",`/history/${id}`,{})
}

