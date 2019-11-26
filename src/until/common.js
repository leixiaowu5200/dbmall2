import * as API from './index';
export const login=(params)=>{
	return API.loginPOST('/api/v1/auth/manager_login',params)
}

//获取用户查询数据
export const userquery=(token,params)=>{
	return API.userGET("/api/v1/admin/users",token,params)
}

//获取指定用户信息
export const userxinxi=(id,token,params)=>{
	return API.userGET("/api/v1/admin/users/"+id,token,params)
}
//获取新增用户数据
export const createuser=(token,params)=>{
	return API.HeadPOST("/api/v1/admin/users",token,params)
}
//修改用户
export const modifyuser=(id,token,params)=>{
	return API.HeadPUT("/api/v1/admin/users/"+id,token,params)
}
//修改用户密码
export const modifypw=(id,token,params)=>{
	return API.HeadPUT("/api/v1/admin/users/reset_pwd/"+id,token,params)
}
//删除用户
export const deluser=(id,token)=>{
	return API.HeadDELETE("/api/v1/admin/users/"+id,token)
}

//获取新增商品数据
export const createSP=(token,params)=>{
	return API.HeadPOST("/api/v1/admin/products",token,params)
}
//获取商品查询数据
export const searchPro=(token,params)=>{
	return API.userGET("/api/v1/admin/products",token,params)
}

//根据ID获取商品信息
export const proxinxi=(id,token,params)=>{
	return API.userGET("/api/v1/admin/products/"+id,token,params)
}
//删除商品
export const delpro=(id,token,params)=>{
	return API.HeadDELETE("/api/v1/admin/products/"+id,token,params)
}

//修改商品数据
export const modifypro=(id,token,params)=>{
	return API.HeadPUT("/api/v1/admin/products/"+id,token,params)
}