
import styles from './enquirygoods.css';
import * as api from '../../until/getpro';
import { Table, Divider, Tag,message,Popconfirm,Icon } from 'antd';
import { connect } from 'dva';
import Axios from 'axios';
import { useState,useEffect } from 'react';
function  Enquirygoods(props) {
     
  // api.GoodsList(localStorage.getItem("token"))
  // .then((datas)=>{
  //   console.log(datas)
  // list=datas.data.categories
  
  // })
  
  function cancel(e) {
    console.log(e);
    message.error('取消成功');
  }
  let [token,setList]=useState('')
  useEffect(()=>{
    props.dispatch({
      type:"info2/getData",
      payload:{
         token:localStorage.getItem("token"),
         params:{per:10,page:1}
      }
    })
  },[])
 
    const columns = [
      {
        title: '产品ID',
        dataIndex: 'id',
        key: 'id',
       
      },
      {
        title: '产品分类名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '分类描述',
        dataIndex: 'descriptions',
        key: 'descriptions',
      },
      {
        title: '分类图片',
        dataIndex: 'coverImg',
        key: 'coverImg',
        render: coverImg=><img src={coverImg}/>
      },
      {
        title: '产品创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      // {
      //   title: '产品更新时间',
      //   key: 'updatedAt',
      //   dataIndex: 'updatedAt',
        
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
                api.deleteGoodsInformation(record.id,localStorage.getItem("token"))
            .then((data)=>{
              console.log(data)
              if(data.status=="200"){
                props.dispatch({
                  type:"info2/getData",
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
            // api.deleteGoodsInformation(record.id,localStorage.getItem("token"))
            // .then((data)=>{
            //   console.log(data)
            //   if(data.status=="200"){
            //     message.success('删除成功');
            //     props.dispatch({
            //       type:"info2/getData",
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
      obj.username=item.name
      obj.descriptions=item.descriptions
      obj.coverImg=item.coverImg
      obj.createdAt=item.createdAt
      // obj.updatedAt=[item.updatedAt]
      data.push(obj)
    })
   
  const paginationProps = {      
    pageSize:10,
    total:props.total1,        
    onShowSizeChange: (current,pageSize) => this.changePageSize(pageSize,current),     
    onChange:(current)=>{
      console.log(current)
      props.dispatch({
        type:"info2/getData",
        payload:{
           token:localStorage.getItem("token"),
           params:{per:10,page:current}
        }
      })
  }
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
       <h1>查询商品分类</h1>
      <Table columns={columns} pagination={paginationProps} dataSource={data} />

  
    </div>
    
  );

}

export default connect(state=>state.info2)(Enquirygoods)
// export default function() {
//   return (
//     <div className={styles.normal}>
//       <h1>Page enquirygoods</h1>
//     </div>
//   );
// }
