import axios from 'axios';
var baseUrl='http://api.cat-shop.penkuoer.com';

export const loginPOST=(url,params)=>{
	return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}
export const userGET = (url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'get',
        headers:{
            "authorization":"Bearer "+token
        },
        params:params
    }).then((data)=>{
        return data;
    })
  }

  export const PUT=(url,params)=>{
    return axios.put(`${baseUrl}${url}`,params).then(data=>data)
  }
  
  export const DELETE = (url, params) => {
    return axios.delete(`${baseUrl}${url}`,params).then(data=>data)
  }
  
  export const HeadPUT=(url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'put',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
  }
  export const HeadPOST = (url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'post',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
  }
  
  export const HeadDELETE = (url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'delete',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
  }
  
