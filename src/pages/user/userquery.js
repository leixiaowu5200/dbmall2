
import styles from './user.css';
import {connect} from "dva"
import { Table, Divider, Tag, Modal,message,Icon } from 'antd';
import { useState,useEffect } from 'react';
import * as api from "../../until/common"


function Index(props) {
  // let [token,setList]=useState("")
  useEffect(()=>{
    props.dispatch({
      type:'info/getData',
      payload:{
        token:localStorage.getItem("token"),
        params:{per:10,page:1}
      }
    })
  },[])

 // 删除框
const { confirm } = Modal;
function showConfirm(record) {
  confirm({
    title: '确认要删除此用户吗?',
    // content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText:'确认',
    cancelText:'取消',
    onOk() {
      console.log(record.id)//这里能打印用户ID
      api.deluser(record.id,localStorage.getItem("token")).then((data)=>{
        // console.log(data.data)
        // console.log('删除成功')
          message.success("删除成功")
          props.dispatch({
              type:'info/getData',
              payload:{
                  token:localStorage.getItem("token"),
                  // params:{per:10,page:1}
                }
              })
            }).catch((err) => {console.log('Oops errors!'+err)});
    },
    onCancel() {},
  });
}
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '用户',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: '操作',
      key: 'delete',
      render: (text, record) => (
        <span>
          <Icon type="close-circle" onClick={()=>{ showConfirm(record)}} style={{color:"red",fontSize:"20px"}}/>
          {/* <a onClick={()=>{
            showConfirm(record)
          }}>删除 {record.name}</a> */}
          {/* <Divider type="vertical" /> */}
        </span>
      ),
    },
  ];
  let obj2=props.list2;
  console.log(obj2);
  // 表格分页属性
  const paginationProps = {
    // showSizeChanger: true,
    pageSize:10,
    total: obj2.totalCount,
    onChange: (current)=>{props.dispatch({
      type:"info/getData",
      payload:{
        token:localStorage.getItem("token"),
        params:{per:10,page:current}
      }
    })},
  };
  const data = [];
  props.list.map((item,i)=>{
    console.log(item)
    let obj={}
    obj.key=i+1
    obj.id=item._id
    obj.username=item.userName
    obj.nickName=item.nickName
    obj.updatedAt=item.updatedAt
    data.push(obj)
  })

  return (
    <div className={styles.normal}>
      <h1>用户查询</h1>
      <Table columns={columns}  pagination={paginationProps} dataSource={data} />
    </div>
  );
}
export default connect(state=>state.info)(Index)
