import styles from './user2.css';
import * as api from "../../until/common"
import { Button, Input, message } from 'antd';
import Link from 'umi/link'
import { connect } from "dva"
function Index(props) {
  if (props.proxinxi != null) {
    // console.log(document.getElementById('aaa'));
    // document.getElementById('aaa').value='sss'
    var value1 = props.proxinxi._id
    var value2 = props.proxinxi.name
    var value3 = props.proxinxi.descriptions
    var value4 = props.proxinxi.price
    var value5 = props.proxinxi.quantity
    var value6 = props.proxinxi.coverImg
  }
  let value7 = ''
  let value8 = ''
  let value9 = ''
  let value10 = ''
  let value11 = ''
  let test=''
  const { Search } = Input;
  let value = ''
  return (
    <div className={styles.normal}>
      <h1>商品信息</h1>
      <div style={{ width: "300px", margin: "auto" }}>
        <Search
          placeholder="请输入id"
          enterButton="搜索"
          size="large"
          onSearch={value => {
            if (props.proxinxi == null) {
              message.error("商品ID不存在")
            }
            props.dispatch({
              type: "infoproxinxi/getData",
              payload: {
                token: localStorage.getItem("token"),
                id: value
              }
            })
          }
          }
        />
        <p className={styles.biaoti}>商品ID：{value1}</p>
        <p className={styles.biaoti}>商品名：{value2}</p>
        <Input placeholder='修改商品名' style={{ marginTop: "20px", height: "40px" }} ref={(val) => value7 = val} />
        <p className={styles.biaoti}>商品详情：{value3}</p>
        <Input placeholder="修改商品详情" style={{ marginTop: "20px", height: "40px" }} ref={(val) => value8 = val} />
        <p className={styles.biaoti}>价格：{value4}</p>
        <Input placeholder="修改商品价格" style={{ marginTop: "20px", height: "40px" }} ref={(val) => value9 = val} />
        <p className={styles.biaoti}>库存：{value5}</p>
        <Input placeholder="修改商品库存" style={{ marginTop: "20px", height: "40px" }} ref={(val) => value10 = val} />
        <img src={value6} alt="图片展示" />
        <Input placeholder="输入要修改的图片地址" style={{ marginTop: "20px", height: "40px" }} ref={(val) => value11 = val} />
       
        <Button type="primary" style={{ marginTop: "20px", width: "300px" }} onClick={() => {
          // if (props.proxinxi == null) {
            api.modifypro(value1, localStorage.getItem('token'), {
              name: value7.state.value,
              descriptions: value8.state.value,
              price: value9.state.value,
              quantity: value10.state.value,
              coverImg: value11.state.value,
              productCategory:'5dd51d2a6b7fee05a958d877',
            }).then((data) => {
              if (data.status == 200) {
                message.success('保存成功');
                // window.location.href = "/userquery/proxinxi"
              }
            })
          // }
        }}>修改</Button>
      </div>
    </div>
  )
}
export default connect(state => state.infoproxinxi)(Index)
