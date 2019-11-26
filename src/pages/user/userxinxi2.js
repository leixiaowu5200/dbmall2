import * as api from "../../until/common"
import styles from './user2.css';
import { Button,Input,message } from 'antd';
import {connect} from "dva"
function Index(props) {
  let value1=props.userxinxi._id
  let value2=props.userxinxi.userName
  let value3=props.userxinxi.password
  let value4=props.userxinxi.nickName
  let value5=props.userxinxi.avatar;
 let value=''
 let value6=''
 let value7=''
 let value8=''
 let value9=''
  return (
    <div className={styles.normal}>
      <h1>用户信息</h1>
      <div style={{width:"300px",margin:"auto"}}>
     
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
         <p className={styles.biaoti}>用户ID：{value1}</p>
         <p className={styles.biaoti}>用户名：{value2}</p>
        <Input placeholder="修改用户名"  style={{marginTop:"20px",height:"40px"}} ref={(val)=>value6=val}/>
         <p className={styles.biaoti}>用户昵称：{value4}</p>
        <Input placeholder="修改用户昵称"  style={{marginTop:"20px",height:"40px"}} ref={(val)=>value7=val} />
         <p className={styles.biaoti}>头像：{value5}</p>
        <Input placeholder="修改用户头像"  style={{marginTop:"20px",height:"40px"}}  ref={(val)=>value8=val}/>
         <p className={styles.biaoti}>用户密码：{value3}</p>
        <Input placeholder="修改用户密码"  style={{marginTop:"20px",height:"40px"}}  ref={(val)=>value9=val}/>
         <Button type="primary" style={{marginTop:"20px",width:"300px"}} onClick={()=>{
           console.log(localStorage.getItem('token'))
           console.log(value1)
          api.modifyuser(value1,localStorage.getItem('token'),{
            userName:value6.state.value,
            nickName:value7.state.value,
            avatar:value8.state.value,
          }).then((data)=>{
            if(data.status == 200){
              message.success('保存成功');
              // http://localhost:8000/
              // window.location.href="/user/userxinxi2"
            }
          })
          api.modifypw(value1,localStorage.getItem('token'),{
            password:value9.state.value,
          }).then((data)=>{
            if(data.status == 200){
              // window.location.href="/user/userxinxi2"
            }
          })
        }}>修改</Button>
      </div>
    </div>
  )
}
export default connect(state=>state.info1)(Index)

