//let base = "http://210.21.237.151:888";
let base = "quote.cmschina.com";

export default {
    // umi config
    publicPath : "./",
    base: './',
    history: 'hash',
    targets:{ios:8},
    autoprefixer:{
        flexbox: true,
    },
    plugins : [
        ["umi-plugin-react",{
            pwa : {
                disableServiceWorker : true ,
            },
            dynamicImport : {
                webpackChunkName : true ,
                loadingComponent : "./pages/loading"
            },
            antd : true ,
            hardSource : true ,
            dll : false
        }]
    ],

    extraBabelPlugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
    ],

    //配置的 evn 选项
    define: {
        "process.env.homePage" : "/homePage"
    },

    /*externals : {
       "jquery" : "jQuery" ,
       "echarts" : "echarts" ,
       "moment" : "moment" ,
       "react" : "React" ,
       "react-dom" : "ReactDOM"
    },*/

    // webpack config
    proxy: {
        "/secuInfo": {
            "target": "http://" + base + "/secuInfo",
            "changeOrigin": true,
            "pathRewrite": { "^/secuInfo" : "" }
        }
    }
}
