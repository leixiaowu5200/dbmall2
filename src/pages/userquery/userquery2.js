
import styles from './userquery.css';
import * as api from '../../until/getpro';
import { Table, Divider, Tag ,message,Popconfirm,Icon} from 'antd';
import { connect } from 'dva';
import { useState,useEffect } from 'react';
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
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: '更新时间',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        
      },
      {
        title: '删除',
        key: 'action',
        render: (text, record) => (
          <span>
            <Popconfirm
              title="您确认删除这条信息吗"
              onConfirm={()=>{
                console.log(record)
                api.deleteUsersInformation(record.id,localStorage.getItem("token"))
              .then((data)=>{
                console.log(data)
                if(data.status=="200"){
                  props.dispatch({
                    type:"info/getData",
                    payload:{
                       token:localStorage.getItem("token"),
                       params:{per:10,page:1}
                    }
                  })
                }
              })
                message.success('删除成功');
              }}
              onCancel={cancel}
              okText="确认"
              cancelText="取消"
            >
            <Icon type="close-circle" style={{color:"red",fontSize:"20px"}}/>
         </Popconfirm>
             {/* <a onClick={()=>{
              api.deleteUsersInformation(record.id,localStorage.getItem("token"))
              .then((data)=>{
                console.log(data)
                if(data.status=="200"){
                  message.success('删除成功');
                  props.dispatch({
                    type:"info/getData",
                    payload:{
                       token:localStorage.getItem("token"),
                       params:{per:10,page:1}
                    }
                  })
                }
              })
            }} style={{color:"red"}}>删除</a> */}
          </span>
        ),
      },
    ];
    const data = [];
    props.list.map((item,i)=>{
      const obj={}
      obj.key=i+1
      obj.id=item._id
      obj.username=item.userName
      obj.createdAt=item.createdAt
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
      <h1>用户列表查询</h1>
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