import * as api from '../until/common'
export default{
	//命名空间
	namespace:'infogood',//根据命名空间加载数据
	state:{
		list:[],
		list2:[],
		serachpro:[],
		serachpro2:[],
		userxinxi:[],
		userxinxi2:[]
    },
    //处理state－－同步
	reducers:{
        change(state,{payload}){
            return{...state,...payload}//返回的是得到最新的数据，用的扩展运算符
		}
	},

	// 异步
	// yield表示后面的方法执行完以后 call表示调用一个api接口
	// put表示一个派发
	effects:{
		*getData(payload,{call,put}){
            // console.log(payload.payload)
            const result=yield call(api.userquery,payload.payload.token,payload.payload.params)
            // yield存在的目的就是当 后边的东西执行完以后，再将它给到等号前边定义的result
			// console.log(result)
			const searchPro=yield call(api.searchPro,payload.payload.token,payload.payload.params)
			// console.log(searchPro.data.products)
			// const userxinxi=yield call(api.userxinxi,"5c6e953a224d199e15f12b9d",payload.payload.token)
			yield put({
				type:'change',
				payload:{
					list:result.data.users,
					list2:result.data,
					serachpro:searchPro.data.products,
					serachpro2:searchPro.data,
					// userxinxi:userxinxi.data.users,
					// userxinxi2:userxinxi.data
					
				}
			})
		},
		// *userData(payload,{call,put}){
		// 	const userxinxi=yield call(api.userxinxi,payload.payload.token)
		// 	// const userxinxi=yield call(api.userxinxi,payload.payload.token,{id:"5c6e953a224d199e15f12b9d"})
		// 	console.log(userxinxi.data)
		// 	yield put({
		// 		type:'change',
		// 		payload:{
		// 			userxinxi:userxinxi.data.users,
		// 			userxinxi:userxinxi.data
		// 		}
		// 	})
		// },
		/* next(){
			this.currentPage++
			api.getUser(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
			  this.tableData=data.data.users
			  this.totalCount = data.data.totalCount
			})
		  },
		  prev(){
			this.currentPage--
			api.getUser(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
			  this.tableData=data.data.users
			  this.totalCount = data.data.totalCount
			})
		  },
		  currentChange(cpage){
			api.getUser(localStorage.getItem('token'),{per:this.per,page:cpage}).then((data)=>{
			  this.tableData=data.data.users
			  this.totalCount = data.data.totalCount
			})
		  } */
	}
}
