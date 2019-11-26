import React,{useState} from 'react'
import styles from './idgoods.css';
import * as api from '../../until/getpro';
import { Button,message,Popconfirm ,Upload,Icon } from 'antd';
import { connect } from 'dva';
import { Input } from 'antd';
 function idgoods(props) {

  function cancel(e) {
    console.log(e);
    message.error('取消成功');
  }
  
  let value1=props.list3._id
  let value2=props.list3.name
  let value3=props.list3.descriptions
  let value4=props.list3.createdAt
  let value5=props.list3.updatedAt
  let value6=props.list3.coverImg
  let coverImg="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=155c98c1173853438ccf8027ab12b01f/2e2eb9389b504fc2f514dba8e2dde71191ef6dd7.jpg"
  if(props.list3.coverImg){
    coverImg=props.list3.coverImg
  }
 
  let value7=''
  let value8=''
  let value9=''
  const { Search } = Input;
  
  
  
  return (
    <div className={styles.normal}>
    <h1>ID查询商品分类信息</h1>
      <div style={{background:"rgba(230,230,250,0.5)",overflow:"hidden",width:"440px",height:"620px",borderRadius:"18px",marginTop:"20px"}}>
      <div style={{width:"400px",marginLeft:"20px"}}>
      <h2>ID查询商品分类信息</h2>
        {/* <label>新增商品分类名称</label> */}
        <Search
      placeholder="请输入商品分类id"
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
    />
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品分类ID:</label>
        <Input placeholder="商品分类ID"  style={{marginTop:"5px",height:"45px"}}  value={value1}/>
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品分类名称:</label>
        <Input placeholder="商品分类名称"  style={{marginTop:"5px",height:"45px"}} value={value2}/>
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品分类描述:</label>
        <Input placeholder="商品分类描述"  style={{marginTop:"5px",height:"45px"}} value={value3}/>
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品分类创建时间:</label>
        <Input placeholder="商品分类创建时间"  style={{marginTop:"5px",height:"45px"}} value={value4}/>
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品分类更新时间:</label>
        <Input placeholder="商品分类更新时间"  style={{marginTop:"5px",height:"45px"}} value={value5}/>
        <label style={{position:"relative",left:"0px",top:"0px",fontSize:"14px",marginTop:"5px"}}>商品主图链接:</label>
        <Input placeholder="商品主图链接"  style={{marginTop:"5px",height:"45px"}} value={value6}/>
        <img src={coverImg}  style={{position:"absolute",right:"13%",top:"92px",width:"400px",height:"250px",border:"3px solid #F8F8FF"}}/>
         <Popconfirm
              title="您确认删除这条信息吗"
              onConfirm={()=>{
                api.deleteGoodsInformation(value1,localStorage.getItem("token"))
                .then((data)=>{
                  console.log(data)
                })
                message.success('删除成功');
              }}
              onCancel={cancel}
              okText="确认"
              cancelText="取消"
            >
            <Button type="primary" style={{marginTop:"20px",width:"400px"}} >删除</Button>
         </Popconfirm>
      </div>
      </div>
      <div style={{background:"rgba(230,230,250,0.5)",width:"440px",height:"317px",
      borderRadius:"18px",marginTop:"20px",position:"absolute",left:"689px",top:"353px"}}>
      <div style={{width:"400px",marginLeft:"20px",position:"absolute",top:"1px",left:"-3px"}}>
      <h2>修改商品分类信息</h2>
        <Input placeholder="商品名字"  style={{marginTop:"0px",height:"45px"}} ref={(val)=>value7=val}/>
        <Input placeholder="商品简介"  style={{marginTop:"30px",height:"45px"}} ref={(val)=>value8=val}/>
        <Input placeholder="主图"  style={{marginTop:"30px",height:"45px"}} ref={(val)=>value9=val}/>
        <Button type="primary" style={{marginTop:"20px",width:"400px"}} onClick={()=>{
          console.log(value8.state.value) 
          if(value7.state.value=="undefined"||value8.state.value=="undefined"||value9.state.value=="undefined"){
            message.success('请输入修改信息');
          }else{
            api.changeGoodInformation(value1,localStorage.getItem("token"),{name:value7.state.value,descriptions:value8.state.value,coverImg:value9.state.value})
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
    </div>
  );
}

export default connect(state=>state.info1)(idgoods) 