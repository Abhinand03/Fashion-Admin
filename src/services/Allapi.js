import base_url from "./Server_url";
import { commanApi } from "./commanApi";


export const addproduct=async(data,header)=>{
    return await commanApi("POST",`${base_url}/add-product`,data,header)
}

export const delteProduct=async(id)=>{
    return await commanApi("DELETE",`${base_url}/deletepro/${id}`,{},"")
}

export const allproduct=async(search)=>{
    return await commanApi("GET",`${base_url}/all-product?search=${search}`,"","")

}

export const getuser=async()=>{
    return await commanApi("GET",`${base_url}/user`,"","")
}

export const getorder=async()=>{
    return await commanApi("GET",`${base_url}/all-order`,'','')
}

export const editproduct=async(data,header)=>{
    return await commanApi("PUT",`${base_url}/pro-update`,data,header)
}

export const delstatus=async(data)=>{
    return await commanApi("PUT",`${base_url}/d-status`,data,"")

}