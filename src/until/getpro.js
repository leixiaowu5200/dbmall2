import * as API from './index';
export const getLogin=(params)=>{
    return API.loginPost('/api/v1/auth/manager_login',params)
}
//获取用户列表
export const  userList=(token,params)=>{
    return API.getUserList('/api/v1/admin/users',token,params)
}
//获取商品分类列表
export const  GoodsList=(token,params)=>{
    return API.getGoodsList('/api/v1/admin/product_categories',token,params)
}
//新增商品分类信息
export const  addGoods=(token,params)=>{
    return API.addGoodsPOST('/api/v1/admin/product_categories',token,params)
}
//id查询商品分类信息
export const  GoodsInformation=(id,token,params)=>{
    return API.goodsInformation('/api/v1/admin/product_categories/'+id,token,params)
}
//删除商品分类信息
export const  deleteGoodsInformation=(id,token)=>{
    return API.deleteGoods('/api/v1/admin/product_categories/'+id,token)
}
//删除用户信息
export const  deleteUsersInformation=(id,token)=>{
    return API.deleteUsers('/api/v1/admin/users/'+id,token)
}
//获取订单列表
export const  OrderList=(token,params)=>{
    return API.getOrderList('/api/v1/admin/orders',token,params)
}
//删除订单信息
export const  deleteOrder=(id,token)=>{
    return API.deleteOrders('/api/v1/admin/orders/'+id,token)
}
//id获取订单信息
export const  ordersInformation=(id,token,params)=>{
    return API.idordersInformation('/api/v1/admin/orders/'+id,token,params)
}
//修改订单信息
export const  changeInformation=(id,token,params)=>{
    return API.Put('/api/v1/admin/orders/'+id,token,params)
}
//修改商品分类信息
export const  changeGoodInformation=(id,token,params)=>{
    return API.putGoods('/api/v1/admin/product_categories/'+id,token,params)
}