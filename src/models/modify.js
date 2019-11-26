import * as api from '../until/common'
export default{
	//命名空间
	namespace:'modify',//根据命名空间加载数据
	state:{
		modifypw:{},
    },
    //处理state－－同步
	reducers:{
        change(state,{payload}){
            return{...state,...payload}//返回的是得到最新的数据，用的扩展运算符
		}
	},
	effects:{
		*getData(payload,{call,put}){
			// console.log(payload.payload)
			const modifypw=yield call(api.modifypw,payload.payload.id,payload.payload.token)
			// console.log(modifypw)
			yield put({
				type:'change',
				payload:{
					modifypw:modifypw.data,
				}
			})
		},
	}
}
