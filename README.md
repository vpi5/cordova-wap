##### 项目集成 react16 umi集成路由  antd UI组件库 moment时间插件

# 代码拉取事项

    注意：
    每次拉取代码后，
    请将.umirc.default.js中的内容全部复制到 
    新建的.umirc.js文件中

# 安装依赖

    npm install

# 启动本地开发环境服务

    npm start     ==> 启动全部项目
    npm prodStart ==> 启动除 行情和信用交易 之外的项目
    
    ps:默认端口为3010，可在.env文件中进行自行修改 
    
# 打包测试代码

    npm build     ==> 打包全部项目
    npm prodBuild ==> 打包除 行情和信用交易 之外的项目
    
    
# 按需打包配置

    1、新建文件 例示： .umirc.xxx.js
    2、在创建的文件中添加所要抛弃的文件夹或文件  例示：查看.umirc.prod.js
    3、在启动项中添加 cross-env UMI_ENV=xxx umi dev 例示：查看package.json中的script
    
# 如需配置启动项和打包项 请按照以下要求写入
    
    1、添加 Protobuf 的后缀为 .proto 转义 json 文件 例示：node script/proto.js
    
    ps: 详细配置方式 请移步查看 package.json文件 和 script文件夹

## webpack config 等配置写在.umirc.js中

## .umirc.default.js 为配置备份文件

## 所有公共组件创建在src/components中

# 必要的规范：
#### 所有className,id,文件名以及方法名请使用小驼峰命名
    例如： className='myCompnent' myUtil.js
          
#### 组件文件夹和组件名称请使用小驼峰命名

    例如： myComponent

#### 所有有属性请使用单引号

    例如: className={'myComponent'}
    
#### 对于JSX语法，props少的可以一行，多的遵循下面的对齐风格。
    
    1、let {name, age} = this.state;
    2、let {data, id} = this.props;


#### src路径表

    src  components(公共组件)  pages(默认index路径)
    .umi            临时文件 不进行打包
    index           首页（自选）
    market          行情
    transaction     交易
    manage          理财 
    information     资讯
    mainIndex       按钮头部变换组件区
    loading         加载动画页
    404             404页面

#### 打包需要抛弃的配置

    externals : {
        "jquery" : "jQuery" ,
        "echarts" : "echarts" ,
        "moment" : "moment" ,
        "react" : "React" ,
        "react-dom" : "ReactDOM"
    },
    
#### 是否兼容到 IE 9
    
    .umirc.js中添加 targets: {ie: 9},
    
#### 是否兼容到 IOS8

    targets:{ios:8},
        autoprefixer:{
            flexbox: true,
        },

#### 主题样式控制文件

    src/utils/theme 文件夹中
    命名格式：`theme-${启动名称}-config.js`
    对应的启动文件名称为： `.umirc.${启动名称}.js`
    改相应的问题时 应将启动名称与主题样式文件对应。