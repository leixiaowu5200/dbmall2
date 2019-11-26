import * as api from "../../until/common"
import styles from './createuser.css';
import { Button,Input,message,Modal } from 'antd';
import {connect} from "dva"
function Index(props) {
  let value1=props.userxinxi._id
  let value2=props.userxinxi.userName
  let value3=props.userxinxi.password
  let value4=props.userxinxi.nickName
  let value5=props.userxinxi.avatar;
 let value=''
  return (
    <div className={styles.normal}>
      <h1>用户信息</h1>
      <div style={{width:"300px",margin:"auto"}}>
      {/* <Search
      placeholder="请输入id"
      enterButton="搜索"
      size="large"
      onSearch={value =>{
        props.dispatch({
          type:"info1/getData",
          payload:{
             token:localStorage.getItem("token"),
             id:value
          }
        })
      }
    }
   
    /> */}
    <Input placeholder="请输入ID开始查询"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value=val}/>
        <Button type="primary" style={{marginTop:"20px",width:"300px"}} onClick={()=>{
           props.dispatch({
            type:"info1/getData",
            payload:{
               token:localStorage.getItem("token"),
               id:value.state.value
            }
          })
        }}>查询</Button>

        <label>用户ID</label>
        <Input placeholder="用户ID"  style={{marginTop:"20px",height:"45px"}} value={value1} 
        // onChange={(e)=>{props.str=value1}}
        />
        <label>用户名</label>
        <Input placeholder="用户名"  style={{marginTop:"20px",height:"45px"}}  value={value2}/>
        <label>用户密码</label>
        <Input placeholder="用户密码"  style={{marginTop:"20px",height:"45px"}} value={value3}/>
        <label>用户昵称</label>
        <Input placeholder="用户昵称"  style={{marginTop:"20px",height:"45px"}} value={value4}/>
        <label>用户地址</label>
        <Input placeholder="用户地址"  style={{marginTop:"20px",height:"45px"}} value={value5}/>
        <Button type="primary" style={{marginTop:"20px",width:"300px"}} onClick={()=>{
          console.log(list)
        }}>保存</Button>
         <Button type="primary" style={{marginTop:"20px",width:"300px"}} onClick={()=>{
          
        }}>修改</Button>
        <div id="box">测试</div>
      </div>
    </div>
  )
}
export default connect(state=>state.info1)(Index)
