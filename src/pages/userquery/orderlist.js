
import styles from './orderlist.css';
import * as api from '../../until/getpro';
import { Table, Divider, Tag ,message,Popconfirm,Icon} from 'antd';
import { connect } from 'dva';
import { useState,useEffect } from 'react';
function  orderlist(props) {
 
  function cancel(e) {
    console.log(e);
    message.error('取消成功');
  }

  let [token,setList]=useState('')
  useEffect(()=>{
    props.dispatch({
      type:"info3/getData",
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
        title: '订单号',
        dataIndex: 'no',
        key: 'no',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '地址',
        key: 'regions',
        dataIndex: 'regions',
        
      },
      {
        title: '详细地址',
        key: 'address',
        dataIndex: 'address',
        
      },
      {
        title: '是否支付',
        key: 'isPayed',
        dataIndex: 'isPayed',
        
      },
      {
        title: '收件人',
        key: 'receiver',
        dataIndex: 'receiver',
        
      },
      
      // {
      //   title: '创建时间',
      //   key: 'createdAt',
      //   dataIndex: 'createdAt',
        
      // },
      {
        title: '删除',
        key: 'action',
        render: (text, record) => (
          <span>
              <Popconfirm
              title="您确认删除这条信息吗"
              onConfirm={()=>{
                console.log(record)
                api.deleteOrder(record.id,localStorage.getItem("token"))
                .then((data)=>{
                  console.log(data)
                  if(data.status=="200"){
                    props.dispatch({
                      type:"info3/getData",
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
          </span>
          // <a onClick={()=>{
          //   console.log(record)
          //   console.log(text)
            // api.deleteOrder(record.id,localStorage.getItem("token"))
            // .then((data)=>{
            //   console.log(data)
            //   if(data.status=="200"){
            //     message.success('删除成功');
            //     props.dispatch({
            //       type:"info3/getData",
            //       payload:{
            //          token:localStorage.getItem("token"),
            //          params:{per:10,page:1}
            //       }
            //     })
            //   }
            // })
          // }} style={{color:"red"}}>删除</a>
        ),
      },
    ];
    const data = [];
    props.list1.map((item,i)=>{
      const obj={}
      obj.key=i+1
      obj.id=item._id
      obj.no=item.no
      obj.price=item.price
      obj.regions=item.regions
      obj.address=item.address
      obj.isPayed=item.isPayed
      obj.receiver=item.receiver
      // obj.createdAt=[item.createdAt]
      data.push(obj)
    })
  const paginationProps = {      
    pageSize:10,
    total:props.total1,        
    onShowSizeChange: (current,pageSize) => this.changePageSize(pageSize,current),     
    onChange:(current)=>{
      console.log(current)
      props.dispatch({
        type:"info3/getData",
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
      <h1>订单信息</h1>
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

export default connect(state=>state.info3)(orderlist)
