import axios from "axios"
 import {BASE_URL} from "./../config/env"



 const getFullURL=(url)=>{
     return `${BASE_URL}${url}`
 }

 const commonFetch = (request)=>{
     const {subUrl,method,data={},params}=request;
  const url = getFullURL(subUrl);
  return axios({method,url,params,data})
 }

 export const get=(request)=>{
     return commonFetch({method:'get',...request})
 }


 export const getIssues=(subUrl)=>{
     return get({subUrl})
 }

export const getComments=(subUrl)=>{
    return  get({subUrl});
}