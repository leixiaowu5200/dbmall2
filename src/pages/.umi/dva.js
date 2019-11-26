import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'info', ...(require('E:/dbmall2/src/models/info.js').default) });
app.model({ namespace: 'info1', ...(require('E:/dbmall2/src/models/info1.js').default) });
app.model({ namespace: 'info2', ...(require('E:/dbmall2/src/models/info2.js').default) });
app.model({ namespace: 'info3', ...(require('E:/dbmall2/src/models/info3.js').default) });
app.model({ namespace: 'info4', ...(require('E:/dbmall2/src/models/info4.js').default) });
app.model({ namespace: 'infogood', ...(require('E:/dbmall2/src/models/infogood.js').default) });
app.model({ namespace: 'infoproxinxi', ...(require('E:/dbmall2/src/models/infoproxinxi.js').default) });
app.model({ namespace: 'infoxinxi', ...(require('E:/dbmall2/src/models/infoxinxi.js').default) });
app.model({ namespace: 'modify', ...(require('E:/dbmall2/src/models/modify.js').default) });
app.model({ namespace: 'proxinxi', ...(require('E:/dbmall2/src/models/proxinxi.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
