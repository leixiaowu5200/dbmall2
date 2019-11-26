import axios from 'axios';
var baseUrl='http://api.cat-shop.penkuoer.com';

export const loginPost=(url,params)=>{
    return  axios.post(`${baseUrl}${url}`,params).then(data=>data)
}

//获取用户列表
export const getUserList = (url,token,params)=>{
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

  //获取商品分类列表
  export const getGoodsList = (url,token,params)=>{
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
  //新增商品分类信息
  export const addGoodsPOST = (url,token,params)=>{
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
  //id查询商品分类信息
  export const goodsInformation= (url,token,params)=>{
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
  //删除商品分类信息
  export const deleteGoods= (url,token)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'Delete',
        headers:{
            "authorization":"Bearer "+token
        },
    }).then((data)=>{
        return data;
    })
  }
  //删除用户信息
  export const deleteUsers= (url,token)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'Delete',
        headers:{
            "authorization":"Bearer "+token
        },
    }).then((data)=>{
        return data;
    })
  }
  //获取订单列表
  export const getOrderList= (url,token,params)=>{
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
  //删除订单信息
  export const deleteOrders= (url,token)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'Delete',
        headers:{
            "authorization":"Bearer "+token
        },
    }).then((data)=>{
        return data;
    })
  }
  //根据ID获取订单信息
  export const idordersInformation= (url,token,params)=>{
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
  //修改订单信息
  export const Put= (url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'Put',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
  }
  //修改商品分类信息
  export const putGoods= (url,token,params)=>{
    return axios({
        url:`${baseUrl}${url}`,
        method:'Put',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
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
  
