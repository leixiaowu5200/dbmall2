import * as api from '../until/getpro'
export default{
    namespace:"info1",
    state:{
      list:[],
      total:'',
      list1:[],
      tatal1:'',
      list3:{}
    },
    reducers:{//数据同步操作
        change(state,{payload}){
            return {...state,...payload}//payload传参
        }
    },
    effects:{
        *getData(payload,{call,put}){//call调接口 put派发数据       
            console.log(payload.payload)  
            const result=yield call(api.userList,payload.payload.token)
            const goodsResult=yield call(api.GoodsList,payload.payload.token)//yield当call执行完之后再给前面的变量
            const idgoods=yield call(api.GoodsInformation,payload.payload.id,payload.payload.token)
            console.log(result)
            console.log(goodsResult.data)
            console.log(idgoods.data)
            yield put({//派发出去
                type:"change",
                payload:{
                    list:result.data.users,
                    total:result.data.totalCount,
                    list1:goodsResult.data.categories,
                    total1:goodsResult.data.totalCount,
                    list3:idgoods.data
                }
            })
        }
    }
} 