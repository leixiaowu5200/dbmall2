import * as api from '../until/getpro'
export default{
    namespace:"info4",
    state:{
      list:{},
    },
    reducers:{//数据同步操作
        change(state,{payload}){
            return {...state,...payload}//payload传参
        }
    },
    effects:{
        *getData(payload,{call,put}){//call调接口 put派发数据       
            console.log(payload.payload)  
            const idorder=yield call(api.ordersInformation,payload.payload.id,payload.payload.token)
            console.log(idorder.data)
            yield put({//派发出去
                type:"change",
                payload:{
                    list:idorder.data
                }
            })
        }
    }
} 