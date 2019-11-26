
import styles from './user.css';
import { Layout, Menu, Breadcrumb, Icon,Avatar,Button,Popover,Modal } from 'antd';
import Link from 'umi/link';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,

//   };
// 头像
const UserList = ['管理员'];//点击按钮切换的名字，后期处理成自动获取用户名
const colorList = ['#7265e6'];
const { confirm } = Modal;

// 悬停气泡
const text = <span>我的</span>;
// const content = (
  
// );

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
   showConfirm =()=> {
     let _this = this;
    confirm({
      title: '确认要退出登录吗?',
      // content: 'When clicked the OK button, this dialog will be closed after 1 second',
      okText:'确认',
      cancelText:'取消',
      onOk() {
        localStorage.removeItem('token');
        // window.localStorage.clear()
        _this.props.history.push('/')
        // window.location.href="/"
      },
      onCancel() {},
    });
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
         {/* <div className={styles.normal}>
          <h1>Page user</h1>
        </div> */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1"  style={{paddingLeft:'0px'}}>
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
              <Menu.Item key="2"><Link to="/userquery/userquery">用户查询</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/userquery/createuser">新增用户</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/userquery/userxinxi2">用户信息</Link></Menu.Item>
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
              <Menu.Item key="5"><Link to="/userquery/searchProduct">商品查询</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/userquery/createSP">新增商品</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/userquery/proxinxi">商品信息</Link></Menu.Item>
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
              <Menu.Item key="8"><Link to="/userquery/enquirygoods">查询商品分类</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/userquery/addgoods">新增商品分类</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/userquery/idgoods">商品分类信息</Link></Menu.Item>
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
              <Menu.Item key="11"><Link to="/userquery/orderlist">订单信息</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/userquery/idorderinformation">查询订单信息</Link></Menu.Item>
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
                  <Popover placement="bottom" title={text} content={(<div>
                              <Link to="/userquery/test">首页</Link>
                              <br/>
                              <br/>
                              <p onClick={()=>{this.showConfirm()}} style={{cursor:'pointer'}}>退出登录</p>
                    </div>)} trigger="click">
                      <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        {this.state.user}
                      </Avatar>
                  </Popover>
                </div>
              </div>
            </div>
            
            </Breadcrumb>
            <div style={{ padding:24 ,paddingTop:50, background: '#fff',fontSize:18}}>
            {this.props.children}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' ,fontSize:"20px"}}>地标商城管理系统</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
// ReactDOM.render(<Autoset />, mountNode);
export default Autoset;

