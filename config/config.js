export default {
    history:'hash',
    publicPath:'./' ,
    plugins: [
      [
        'umi-plugin-react',
        {
          antd:true,//只要在这配置完，整个项目中都可以使用antd这个UI框架，以及dva这个数据流
          dva: true,
         
        },

      ]
    ],
  };