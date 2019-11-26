
import styles from './addgoods.css';
import * as api from '../../until/getpro';
import { Button,message ,Upload,Icon} from 'antd';
import { Input } from 'antd';
export default function() {
  let value1=''
  let value2=''
  let value3=''
  const prop = {
    name: 'file',
    action: 'http://api.cat-shop.penkuoer.com/api/v1/common/file_upload',
    method:"post",
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file.response.message)
        console.log("http://api.cat-shop.penkuoer.com"+info.file.response.info);
        value3="http://api.cat-shop.penkuoer.com"+info.file.response.info
      }
      if (info.file.status === 'done') {

        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className={styles.normal}>
      <h1>新增商品分类信息</h1>
     <div style={{margin:"auto",background:"rgba(230,230,250,0.5)",overflow:"hidden",width:"440px",height:"350px",borderRadius:"18px",marginTop:"20px"}}>
      <div style={{width:"300px",margin:"auto"}}>
      <h2 style={{marginTop:"10px"}}>新增商品分类信息</h2>
        {/* <label>新增商品分类名称</label> */}
        <Input placeholder="新增商品分类名称"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value1=val}/>
        {/* <label>新增商品分类简介</label> */}
        <Input placeholder="新增商品分类简介"  style={{marginTop:"20px",height:"45px"}} ref={(val)=>value2=val}/>
        <label style={{position:"relative",left:"-85px",top:"35px",fontSize:"16px"}}>新增商品分类主图:</label>
        <Upload {...prop}>
        <Button  style={{height:"45px",margin:"0 0 0 130px"}}>
           <Icon type="upload" /> 上传商品分类主图
        </Button>
       </Upload>
        <Button type="primary" style={{marginTop:"20px",width:"300px"}} onClick={()=>{
          console.log(value1.state.value)
          console.log(value2.state.value)
          console.log(value3)
          api.addGoods(localStorage.getItem("token"),{name:value1.state.value,descriptions:value2.state.value,coverImg:value3})
          .then((data)=>{
           if(data.status=="200"){
            message.success('保存成功');
           }
          })
        }}>保存</Button>
      </div>
      </div>
    </div>
  );
}
