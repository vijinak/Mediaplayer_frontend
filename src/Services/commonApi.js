import axios from 'axios'

export const commonApi = async(httpRequest,url,reqBody)=>{
    let reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:{"content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}