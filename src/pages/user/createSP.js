import * as api from "../../until/common"
import styles from './createSP.css';
import { Button,Input,message} from 'antd';
export default function() {
  let value1=''
  let value2=''
  let value3=''
  let value4=''
  let value5=''
  let value6=''
  return (
    <div className={styles.normal}>
      <h1>新增商品</h1>
      <div style={{width:"300px",margin:"auto"}}>
        <Input placeholder="请输入商品名"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value1=val}/>
        <Input placeholder="请输入商品简介"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value2=val}/>
        <Input placeholder="请输入商品数量"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value3=val}/>
        <Input placeholder="请输入商品价格"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value4=val}/>
        <Input placeholder="请输入商品图片地址"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value5=val}/>
        {/* <Input placeholder="商品分类ID"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value6=val}/> */}
        <Button type="primary" style={{marginTop:"20px",width:"300px"}}
          onClick={()=>{
            console.log(value1.state)
            console.log(value2.state)
            api.createSP(localStorage.getItem('token'),{
              name:value1.state.value,
              descriptions:value2.state.value,
              quantity:value3.state.value,
              price:value4.state.value,
              coverImg:value5.state.value,
              productCategory:'5dd51d2a6b7fee05a958d877',
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
