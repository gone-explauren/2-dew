import { Buffer } from "buffer";
import axios from 'axios';
window.Buffer = window.Buffer || Buffer;


export async function get(url, baseURL, model, id='') {
  const config = {
    url: url+model+id,
    method: 'get', 
    baseURL: baseURL,
  }

  let result = await axios(config);
  console.log(result.data)
  return result.data
}

export async function post(url, baseURL, data, model='') {
 let token = '';
 if(data.headers){
   token = Buffer.from(`${data.headers.username}:${data.headers.password}`, 'utf8').toString('base64')
 }
  const config = {
    url: url+model,
    method: 'post', 
    baseURL: baseURL,
    data: data,
    headers: { Authorization: `Basic ${token}`}
  }
  try{
    let result = await axios(config);
    console.log(result.data)
    return result.data
  }catch(e){
    console.error(e);
  }
}

export async function updateAndDelete(method, url, baseURL, model, id, data){
  const config = {
    url: url+model+id, 
    method: method,
    baseURL: baseURL,
    data: data
  }

  try{
    let result = await axios(config);
    console.log(result.data);
    return result.data
  }
  catch(e){
    console.error(e)
  }
}