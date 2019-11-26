import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
  },
  {
    path: '/user',
    exact: false,
    component: require('../user/_layout.js').default,
    routes: [
      {
        path: '/user/createSP',
        exact: true,
        component: require('../user/createSP.js').default,
      },
      {
        path: '/user/createuser',
        exact: true,
        component: require('../user/createuser.js').default,
      },
      {
        path: '/user/proxinxi',
        exact: true,
        component: require('../user/proxinxi.js').default,
      },
      {
        path: '/user/searchProduct',
        exact: true,
        component: require('../user/searchProduct.js').default,
      },
      {
        path: '/user/test',
        exact: true,
        component: require('../user/test.js').default,
      },
      {
        path: '/user/user',
        exact: true,
        component: require('../user/user.js').default,
      },
      {
        path: '/user/userquery',
        exact: true,
        component: require('../user/userquery.js').default,
      },
      {
        path: '/user/userxinxi',
        exact: true,
        component: require('../user/userxinxi.js').default,
      },
      {
        path: '/user/userxinxi2',
        exact: true,
        component: require('../user/userxinxi2.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    path: '/userquery',
    exact: false,
    component: require('../userquery/_layout.js').default,
    routes: [
      {
        path: '/userquery/addgoods',
        exact: true,
        component: require('../userquery/addgoods.js').default,
      },
      {
        path: '/userquery/createSP',
        exact: true,
        component: require('../userquery/createSP.js').default,
      },
      {
        path: '/userquery/createuser',
        exact: true,
        component: require('../userquery/createuser.js').default,
      },
      {
        path: '/userquery/enquirygoods',
        exact: true,
        component: require('../userquery/enquirygoods.js').default,
      },
      {
        path: '/userquery/idgoods',
        exact: true,
        component: require('../userquery/idgoods.js').default,
      },
      {
        path: '/userquery/idorderinformation',
        exact: true,
        component: require('../userquery/idorderinformation.js').default,
      },
      {
        path: '/userquery',
        exact: true,
        component: require('../userquery/index.js').default,
      },
      {
        path: '/userquery/newusers',
        exact: true,
        component: require('../userquery/newusers.js').default,
      },
      {
        path: '/userquery/orderlist',
        exact: true,
        component: require('../userquery/orderlist.js').default,
      },
      {
        path: '/userquery/proxinxi',
        exact: true,
        component: require('../userquery/proxinxi.js').default,
      },
      {
        path: '/userquery/searchProduct',
        exact: true,
        component: require('../userquery/searchProduct.js').default,
      },
      {
        path: '/userquery/test',
        exact: true,
        component: require('../userquery/test.js').default,
      },
      {
        path: '/userquery/user',
        exact: true,
        component: require('../userquery/user.js').default,
      },
      {
        path: '/userquery/userquery',
        exact: true,
        component: require('../userquery/userquery.js').default,
      },
      {
        path: '/userquery/userquery2',
        exact: true,
        component: require('../userquery/userquery2.js').default,
      },
      {
        path: '/userquery/userxinxi2',
        exact: true,
        component: require('../userquery/userxinxi2.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
