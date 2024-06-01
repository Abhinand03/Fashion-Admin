import axios from "axios";

export const commanApi=async(httpReqmethod,url,reqBody,reqheadear)=>{
    const reqConfig={
        method:httpReqmethod,
        url,
        data:reqBody,
        headers:reqheadear?reqheadear:{"Content-Type":"application/json"}

    }

    return await axios(reqConfig).then((res)=>{return res}).catch((err)=>{return err})  
                  
}