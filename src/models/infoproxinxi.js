import * as api from '../until/common'
export default{
	//命名空间
	namespace:'infoproxinxi',//根据命名空间加载数据
	state:{
		proxinxi:{},
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
			const proxinxi=yield call(api.proxinxi,payload.payload.id,payload.payload.token)
			// console.log(proxinxi)
			yield put({
				type:'change',
				payload:{
					proxinxi:proxinxi.data,
				}
			})
		},
	}
}
