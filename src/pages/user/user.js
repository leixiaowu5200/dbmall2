
import styles from './user.css';
import { Layout, Menu, Breadcrumb, Icon,Avatar,Button,Popover } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,

//   };
// 头像
const UserList = ['小红', '小明', '小五', '赵丽颖'];//点击按钮切换的名字，后期处理成自动获取用户名
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

// 悬停气泡
const text = <span>我的</span>;
const content = (
  <div className={styles.bxs}>
    <p>地标商城首页</p>
    <p onClick={()=>{
      // console.log(localStorage.getItem("token"))
      window.localStorage.clear()
      window.location.href="/"
    }}>退出登录</p>
  </div>
);

const buttonWidth =30;

class Autoset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
      collapsed: false,
    };
  }

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              {/* <Icon type="pie-chart" /> */}
              <span>地标商城后台管理系统</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="2">用户查询</Menu.Item>
              <Menu.Item key="3">新增用户</Menu.Item>
              <Menu.Item key="4">用户信息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>商品管理</span>
                </span>
              }
            >
              <Menu.Item key="5">商品查询</Menu.Item>
              <Menu.Item key="6">新增商品</Menu.Item>
              <Menu.Item key="7">商品信息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="user" />
                  <span>商品分类管理</span>
                </span>
              }
            >
              <Menu.Item key="8">查询商品分类</Menu.Item>
              <Menu.Item key="9">新增商品分类</Menu.Item>
              <Menu.Item key="10">商品分类信息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="user" />
                  <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="11">查询订单</Menu.Item>
              <Menu.Item key="12">订单信息</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: ' 0', }}>
            <Breadcrumb style={{ margin:'0' ,color:"#fff", }}>
            <div className={styles.touxiang}>
              <div className="demo">
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popover placement="bottom" title={text} content={content} trigger="click">
                      <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        {this.state.user}
                      </Avatar>
                  </Popover>
                </div>
              </div>
             
              <Button
                size="small"
                style={{ marginLeft: 16, verticalAlign: 'middle' }}
                onClick={this.changeUser}
              >
              切换用户
              </Button>
            </div>
            
            </Breadcrumb>
            <div style={{ padding:24 ,paddingTop:50, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>这里是底部，你想要什么功能自己加</Footer>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
// ReactDOM.render(<Autoset />, mountNode);
export default Autoset;

