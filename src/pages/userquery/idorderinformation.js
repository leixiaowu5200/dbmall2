
import styles from './idorderinformation.css';
import React,{useState} from 'react'
import * as api from '../../until/getpro';
import { Button,message,Popconfirm } from 'antd';
import { connect } from 'dva';
import { Input } from 'antd';
 function idorderinformation(props) {
  
  function cancel(e) {
    console.log(e);
    message.error('取消成功');
  }
  let value1=props.list._id
  let value2=props.list.no
  let value3=props.list.price
  let value4=props.list.regions
  let value5=props.list.address
  let value6=props.list.isPayed
  let value7=props.list.receiver
  let value8=""
  const { Search } = Input;
  return (
    <div className={styles.normal}>
       <h1>ID查询订单信息</h1>
      <div style={{width:"400px",marginLeft:"20px"}} className={styles.normal2}>
      <h2>ID查询订单信息</h2>
        {/* <label>新增商品分类名称</label> */}
        <Search
      placeholder="请输入商品分类id"
      enterButton="搜索"
      size="large"
      onSearch={value =>{
        props.dispatch({
          type:"info4/getData",
          payload:{
             token:localStorage.getItem("token"),
             id:value
          }
        })
      }
        
       }
    />
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>用户ID:</label>
        <Input placeholder="用户ID"  style={{marginTop:"5px",height:"45px"}}  value={value1}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>订单号:</label>
        <Input placeholder="订单号"  style={{marginTop:"5px",height:"45px"}} value={value2}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>价格:</label>
        <Input placeholder="价格"  style={{marginTop:"5px",height:"45px"}} value={value3}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>地址:</label>
        <Input placeholder="地址"  style={{marginTop:"5px",height:"45px"}} value={value4}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>详细地址:</label>
        <Input placeholder="详细地址"  style={{marginTop:"5px",height:"45px"}} value={value5}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>是否支付:</label>
        <Input placeholder="是否支付"  style={{marginTop:"5px",height:"45px"}} value={value6}/>
        <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>收件人:</label>
        <Input placeholder="收件人"  style={{marginTop:"5px",height:"45px"}} value={value7}/>
        
        {/* <img src={coverImg} style={{position:"absolute",right:"100px",top:"181px",width:"300px"}}/> */}
        
        
        
        {/* <Button type="primary" style={{marginTop:"20px",width:"400px"}} onClick={()=>{
          api.deleteOrder(value1,localStorage.getItem("token"))
          .then((data)=>{
            console.log(data)
            if(data.status=="200"){
              message.success('删除成功');
            }
          })
        }}>删除</Button> */}


           <Popconfirm
              title="您确认删除这条信息吗"
              onConfirm={()=>{
                api.deleteOrder(value1,localStorage.getItem("token"))
                .then((data)=>{
                  console.log(data)
                })
                message.success('删除成功');
                window.location.href = "/userquery/idorderinformation"
              }}
              onCancel={cancel}
              okText="确认"
              cancelText="取消"
            >
            <Button type="primary" style={{marginTop:"20px",width:"400px"}} >删除</Button>
         </Popconfirm>


      </div>
      <div style={{width:"400px",marginLeft:"20px",position:"relative",top:"-164px",left:"455px"}}>
      <h2>修改订单信息</h2>
      <label style={{position:"relative",top:"0",left:"0",marginTop:"5px",fontSize:"14px"}}>是否支付:请输入f(未支付)/t(已支付)</label>
        <Input placeholder="f还是t，麻溜的只能选一个"  style={{marginTop:"5px",height:"45px"}} ref={(val)=>value8=val}/>
        <Button type="primary" style={{marginTop:"20px",width:"400px"}} onClick={()=>{
          console.log(value8.state.value)
          if(value8.state.value=="f"){
            api.changeInformation(value1,localStorage.getItem("token"),{isPayed:"false"})
          .then((data)=>{
            console.log(data)
            if(data.status=="200"){
              message.success('修改成功');
            }
          })
          }else{
            api.changeInformation(value1,localStorage.getItem("token"),{isPayed:"true"})
            .then((data)=>{
              console.log(data)
              if(data.status=="200"){
                message.success('修改成功');
              }
            })
          }
          
        }}>修改</Button>
      </div>
    </div>
  );
}

export default connect(state=>state.info4)(idorderinformation) 
