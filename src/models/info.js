import * as api from '../until/getpro'
export default{
    namespace:"info",
    state:{
      list:[],
      total:'',
    },
    reducers:{//数据同步操作
        change(state,{payload}){
            return {...state,...payload}//payload传参
        }
    },
    effects:{
        *getData(payload,{call,put}){//call调接口 put派发数据       
            console.log(payload.payload)  
            const result=yield call(api.userList,payload.payload.token,payload.payload.params)
            console.log(result)
            yield put({//派发出去
                type:"change",
                payload:{
                    list:result.data.users,
                    total:result.data.totalCount,
                }
            })
        }
    }
} 