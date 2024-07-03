import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



export const addVideoApi = async(reqbody) =>{
    return await commonApi('POST',`${serverUrl}/videos`,reqbody)
}

// api to get all videos
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

// watchhistory
export const addToHistory = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqbody)
}

// get video from history
export const getVideoHistory = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,'')
}

// delete video from History
export const deleteVideoHistory = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}
// api to add category
export  const addCategoryapi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
// api to get all category
export const allCategoryapi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}
// api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}
// api to get a video
export const avideoApi = async(id)=>{
    return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}
// api to update category
export const updateCategoryApi = async(id, reqbody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
}