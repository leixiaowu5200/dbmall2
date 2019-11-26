import styles from './index.css';
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
// import {connect} from 'dva';
import * as api from '../until/getpro';

export default function (props) {
  let value1 = '';
  let value2 = '';
  document.onkeydown = function () {
    //回车键的键值为 13
    if (event.keyCode == 13) {
      api.getLogin({ userName: value1.state.value, password: value2.state.value })
        .then((data) => {
          console.log(data)
          if (data.data.code == "success") {
            localStorage.setItem('token', data.data.token)
            message.success('登录成功,即将进入');
            setTimeout(function () {
              props.history.push('./userquery/test')
            }, 1000)
          } else {
            message.error('用户名或密码错误，请重新输入！');
          }
        }).catch((err) => {
          message.error('用户名或密码错误，请重新输入！');
        })
    }
  }
  return (
    <div className={styles.normal2}>
      <div className={styles.normal}>
        <div className={styles.cont}>
          <Form className="login-form">
            <h3 style={{ position: "relative", left: "0px", top: "-10px", fontSize: "30px" }}>地标商城后台管理系统</h3>
            <Input
              className={styles.wbk}
              placeholder="请输入用户名"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              ref={(val) => value1 = val}
            />
            <br />
            <br />
            <Input type="Password"
              className={styles.wbk}
              placeholder="请输入密码"
              prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              ref={(val) => value2 = val}
            />
            <br />
            <br />
            <Button type="primary" onClick={() => {
              api.getLogin({ userName: value1.state.value, password: value2.state.value })
                .then((data) => {
                  console.log(data)
                  if (data.data.code == "success") {
                    localStorage.setItem('token', data.data.token)
                    message.success('登录成功,即将进入');
                    setTimeout(function () {
                      props.history.push('./userquery/test')
                    }, 1000)
                  } else {
                    message.error('用户名或密码错误，请重新输入！');
                  }
                }).catch((err) => {
                  message.error('用户名或密码错误，请重新输入！');
                })
            }} block>登录</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

//  connect(state=>state.info)(Index)
