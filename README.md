#### 项目集成 nodeJS

#### 项目运行依赖

    1、npm -g install cordova   //安装cordova  备注 ：在安装 cordova 的时候可能会产生很多问题 需要自己配置环境变量
    2、下载了gradle的二进制版本    //网上自己下载 一大堆的  https://gradle.org/install/

#### 初始化项目

    1、检查 cordova 版本    // 命令 ： cordova --version
    2、创建一个新的应用      // 命令 ：cordova create JerryUI5HelloWorld
    3、添加 android 平台    // 命令 ：cordova platform add android
    3、将要打包的文件 放入根目录下的www文件夹中
    4、打包安卓版本安装包     // 命令 : cordova compile
    5、更换打包代码后 需要将这些资源自动同步到文件夹platformsandroidassetswww下面    // 命令 ：cordova prepare
    6、重新生成 APK 安装文件  //命令 ：cordova compile

#### 鸣谢

    参考地址： https://cloud.tencent.com/developer/article/1185889
    参考地址： https://www.cnblogs.com/siji/p/6955851.html
