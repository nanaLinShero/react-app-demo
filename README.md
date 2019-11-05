#react+react-router+less+axios
>让代码跑一会儿

##create-react-app初始化项目
不支持项目名称大写
```
create-react-app react-app-demo
```

##指令
- 启动：npm start
- 测试：npm test
- 打包：npm run build
- 展开：npm run eject -->操作不可逆

##less配置
```
npm i less less-loader -D -S
```
####添加webpack的less-loader配置
在根目录下config文件夹中，找到文件webpack.config.js，搜索sassModuleRegex会找到如下代码：
![代码 图片](/src/assets/images/readme/re_01.jpg)
因为create-react-app初始化会自动配置css-loader和sass-loader，但不会配置less-loader，所以在上述代码之后添加以下代码：
```javascript
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
```
继续搜索下一个sassModuleRegex，会看到如下代码：
![代码 图片](/src/assets/images/readme/re_02.jpg)
在其后加入less-loader的配置即可完成，配置如下：
```javascript
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders({ importLoaders: 2 }, 'less-loader')
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 2,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent
    },
    'less-loader'
    )
},
```

##引入路由
####1.更改src目录结构
- api ajax请求封装
- assets 静态资源文件
- components 子组件集合
- pages 路由父组件集合
- routes 路由配置
- stores 状态管理
- utils 工具类函数
####2.设置文件别名

