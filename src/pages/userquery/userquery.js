
import styles from './userquery.css';
import * as api from '../../until/getpro';
import { Table, Divider, Tag ,message,Popconfirm,Icon,Modal,Button} from 'antd';
import { connect } from 'dva';
import { useState,useEffect } from 'react';
import * as api2 from "../../until/common"

function  Userquery(props) {
  
  
  function cancel(e) {
    console.log(e);
    message.error('取消成功');
  }
  
  let [token,setList]=useState('')
  useEffect(()=>{
    props.dispatch({
      type:"info/getData",
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
      api2.deluser(record.id,localStorage.getItem("token")).then((data)=>{
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
       
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: '用户头像',
        dataIndex: 'avatar',
      render:avatar=><img src={avatar} />
      },
      {
        title: '更新时间',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        
      },
      {
        title: '删除',
        key: 'delete',
        render: (text, record) => (
          <span>
            {/* <Button shape="round">修改</Button> */}
            <Icon type="close-circle" onClick={()=>{ showConfirm(record)}} style={{color:"red",fontSize:"20px"}}/>
          </span>
        ),
      },
      // {
      //   title: '删除',
      //   key: 'action',
      //   render: (text, record) => (
      //     <span>
      //       <Popconfirm
      //         title="您确认删除这条信息吗"
      //         onConfirm={()=>{
      //           console.log(record)
      //           api.deleteUsersInformation(record.id,localStorage.getItem("token"))
      //         .then((data)=>{
      //           console.log(data)
      //           if(data.status=="200"){
      //             props.dispatch({
      //               type:"info/getData",
      //               payload:{
      //                  token:localStorage.getItem("token"),
      //                  params:{per:10,page:1}
      //               }
      //             })
      //           }
      //         })
      //           message.success('删除成功');
      //         }}
      //         onCancel={cancel}
      //         okText="确认"
      //         cancelText="取消"
      //       >
      //       <Icon type="close-circle" style={{color:"red",fontSize:"20px"}}/>
      //    </Popconfirm>
      //        {/* <a onClick={()=>{
      //         api.deleteUsersInformation(record.id,localStorage.getItem("token"))
      //         .then((data)=>{
      //           console.log(data)
      //           if(data.status=="200"){
      //             message.success('删除成功');
      //             props.dispatch({
      //               type:"info/getData",
      //               payload:{
      //                  token:localStorage.getItem("token"),
      //                  params:{per:10,page:1}
      //               }
      //             })
      //           }
      //         })
      //       }} style={{color:"red"}}>删除</a> */}
      //     </span>
      //   ),
      // },
    ];
    const data = [];
    props.list.map((item,i)=>{
      const obj={}
      obj.key=i+1
      obj.id=item._id
      obj.username=item.userName
      obj.nickName=item.nickName
      obj.avatar=item.avatar
      obj.updatedAt=[item.updatedAt]
      data.push(obj)
    })
  const paginationProps = {      
    pageSize:10,
    total:props.total,        
    onShowSizeChange: (current,pageSize) => this.changePageSize(pageSize,current),     
    onChange:(current)=>{
      console.log(current)
      props.dispatch({
        type:"info/getData",
        payload:{
          token:localStorage.getItem("token"),
          params:{per:10,page:current}
        }
      })
    },    
  }

    // {
    //   key: '1',
    //   id: 'John Brown',
    //   username: 32,
    //   createdAt: 'New York No. 1 Lake Park',
    //   updatedAt: ['nice', 'developer'],
    // },
   
  return (
    <div className={styles.normal}>
      <Table columns={columns} pagination={paginationProps} dataSource={data} />
      {/* {
      props.list.map((item,i)=>{
        return (
        <p key={i}>{item.userName}</p>
        )
      })
    } */}
  
    </div>
    
  );

}

export default connect(state=>state.info)(Userquery)