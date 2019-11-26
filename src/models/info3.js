import * as api from '../until/getpro'
export default{
    namespace:"info3",
    state:{
      list1:[],
      tatal1:'',
    },
    reducers:{//数据同步操作
        change(state,{payload}){
            return {...state,...payload}//payload传参
        }
    },
    effects:{
        *getData(payload,{call,put}){//call调接口 put派发数据       
            console.log(payload.payload)  
            const orderResult=yield call(api.OrderList,payload.payload.token,payload.payload.params)//yield当call执行完之后再给前面的变量
           
            console.log(orderResult)
            yield put({//派发出去
                type:"change",
                payload:{
                    list1:orderResult.data.orders,
                    total1:orderResult.data.totalCount,
                    
                }
            })
        }
    }
} 