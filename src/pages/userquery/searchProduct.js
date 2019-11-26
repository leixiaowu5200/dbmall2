
import styles from './user.css';
import {connect} from "dva"
import { Table, Divider, Tag,message,Modal,Icon } from 'antd';
import { useState,useEffect } from 'react';
import * as api from "../../until/common"


function Index(props) {
  // let [token,setList]=useState("")
  useEffect(()=>{
    props.dispatch({
      type:'infogood/getData',
      payload:{
        token:localStorage.getItem("token"),
        params:{per:10,page:1}
      }
    })
  },[])
  // window.onload=()=>
   
// 删除框
const { confirm } = Modal;
function showConfirm(record) {
  confirm({
    title: '确认要删除此商品吗?',
    // content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText:'确认',
    cancelText:'取消',
    onOk() {
      console.log(record)
      api.delpro(record.id,localStorage.getItem("token")).then((data)=>{
          message.success("删除成功")
          props.dispatch({
              type:'infogood/getData',
              payload:{
                  token:localStorage.getItem("token"),
                  params:{per:10,page:1}
                }
              })
            })
     .catch(() => console.log('Oops errors!'));
    },
    onCancel(){},
  });
}
  const columns = [
    {
      title: '商品ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '商品图',
      dataIndex: 'image',
      key: 'image',
      render: image => <img src={image} />,
    },
    {
      title: '产品名',
      dataIndex: 'pname',
      key: 'pname',
    },
    {
      title: '描述',
      dataIndex: 'descriptions',
      key: 'descriptions',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '库存',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '删除',
      key: 'delete',
      render: (text, record) => (
        // console.log(record),
        <span>
          <Icon type="close-circle" onClick={()=>{ showConfirm(record)}} style={{color:"red",fontSize:"20px"}}/>
        {/*   <a onClick={()=>{
            showConfirm(record)
              // console.log(record)
              // api.delpro(record.id,localStorage.getItem("token")).then((data)=>{
              //     message.success("删除成功")
              //     props.dispatch({
              //         type:'info/getData',
              //         payload:{
              //             token:localStorage.getItem("token"),
              //             params:{per:10,page:1}
              //           }
              //         })
              //       })
          }}>删除{record.name}</a> */}
          {/* <Divider type="vertical" /> */}
        </span>
      ),
    },
  ];

 


  let obj2=props.serachpro2;
  console.log(obj2);
  // 表格分页属性
  const paginationProps = {
    // showSizeChanger: true,
    pageSize:10,
    total: obj2.totalCount,
    onChange: (current)=>{props.dispatch({
      type:"infogood/getData",
      payload:{
        token:localStorage.getItem("token"),
        params:{per:10,page:current}
      }
    })},
  };
  const data = [];
  props.serachpro.map((item,i)=>{
    let obj={}
    // obj.key=i+1
    obj.id=item._id
    obj.image=item.coverImg
    obj.price=item.price
    obj.quantity=item.quantity
    obj.descriptions=item.descriptions
    obj.pname=item.name
    data.push(obj)
  })
  // data=[
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  // ];
   
  return (
    <div className={styles.normal}>
      <h1>商品查询</h1>
      <Table columns={columns}  pagination={paginationProps} dataSource={data} />
    </div>
  );
}
export default connect(state=>state.infogood)(Index)
