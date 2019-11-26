import * as api from "../../until/common"
import styles from './createuser.css';
import { Button,Input,message } from 'antd';
import { useState,useEffect } from 'react';
export default function() {
  let [list,setList]=useState([])
  let value1=''
  let value2=''
  let value3=''
  let value4=''
  return (
    <div className={styles.normal}>
      <h1>新增用户</h1>
      <div style={{width:"300px",margin:"auto"}}>
        <Input placeholder="请输入用户名"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value1=val}/>
        <Input placeholder="请输入密码"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value2=val}/>
        <Input placeholder="请输入昵称"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value3=val}/>
        <Input placeholder="请输入头像链接地址"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value4=val}/>
        <Button type="primary" style={{marginTop:"20px",width:"300px"}}
          onClick={()=>{
            api.createuser(localStorage.getItem('token'),{
              userName:value1.state.value,
              password:value2.state.value,
              nickName:value3.state.value,
              avatar:value4.state.value,
            }).then((data)=>{
              console.log(data)
              if(data.status == 200){
                message.success('保存成功');
              }
            })
          }}
        >保存</Button>
      </div>
    </div>
  );
}
