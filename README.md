# 前端重构架构选择对比 
---

### 1. Nej + regular
* 使用的框架

  Nej (包括模块化Nej.define,模块调度，nes和常用控件)
  
  [Regularjs](https://github.com/regularjs/regular) 波神是这么介绍的：
  > Regularjs is a living template engine that helps us to create data-driven components.
  可以减少很多DOM操作，写起来还是很爽的

* 可使用的UI库

  Nej的控件库，包括弹窗，分页等
  
  [Regularjs-ui](http://regular-ui.github.io/index.html) 组件库
  >  一款基于RegularJS的前端组件库,轻量、简洁、高效

* 打包工具 nej-build

  能够对mcss，ftl，html，js 进行相应的压缩处理，和提取公共文件单独引用，减少http请求，模块化依赖分析只能处理Nej.define定义的模块。但配置相对简单
* 目录结构和代码规范

  可以参考公众平台的目录结构并做相应的调整

#### __总结__ ： 公司内部技术栈，框架作者在公司（飞哥，波神），遇到难以解决的框架问题以及框架带来的技术坑可以方便咨询。前端组人员大部分都会这两种技术框架，前期学习成本不大。

---

### 2. angular + requirejs(r.js打包) + jQuery

* 使用框架和库

  angularjs (MVC) + jQuey (方便dom操作，元素选择)
  requirejs 模块依赖管理工具

* 可使用的UI库

  开源的很多 https://angular-ui.github.io/ 可以自行改造

* 打包工具

  r.js + nej 打包 nej打包页面明确说了Requirejs的打包工具

  > ![打包工具](http://7oxjbb.com1.z0.glb.clouddn.com/requirejs%E6%89%93%E5%8C%85.png)



所以我们需要先对js代码用r.js进行打包，然后其他的再用nej进行打包。
* 目录结构和代码规范

  可以在原来的代码目录结构上进行调整[参考AngularJs最佳实践](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)

#### __总结__ ： 原有架构所用的是这套框架，原有的代码可以部分重用，有些坑已被人踩过，可以避免，遇到问题有老司机带路。可以借此机会增加自己技术栈（使用非公司内部框架）也是组内成员的一次很好的提高机会。鉴于组内成员大部分都有regular使用经验，切换过来应该挺快。

### 3.第二种架构方案demo配置如下

* (1) 目录结构

![目录结构](http://7oxjbb.com1.z0.glb.clouddn.com/%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84.jpg)



```
deploy //nej 打包工具配置文件所在目录
mock // 前端自测fmpp 模拟数据所在目录
res //  代码发布后静态资源目录包括字体文件、css、img可以放这里
src // 前端源码所在目录
   —— css // mcss 编译后的css文件存放目录
   —— fonts // 字体文件目录
   —— html // html 文件目录 可以是angualar 模板目录 路由引入
   —— javascript // javascript代码打包前所在的目录
          —— 3rd //第三方库文件包括（angular,angular-route. etc）
          —— common // 项目中用到的共用模块所在目录
          —— home // 然后就是按照业务划分的目录
             —— controllers // 控制器目录
             —— directives // 自定义指令目录
             —— filters // 过滤器目录
             module.js //angular模块以及一些全局配置文件
             app.js // angular 模块入口文件会引入依赖控制器，指令，过滤器
             bootstrap.js // 模块启动文件
         —— www-build // js通过r.js 打包后所在的目录 其实应该和javascript同级 里面的目录结构和javascript一样,文件名也可以一样。所以打完包后ftl引用路径可以通过配置个变量来改变。
        ——json // json文件目录
        ——mcss //mcss css 预处理文件所在目录
statichtml // ftl 模板本地编译后html所在的目录，用于开发自测
template // ftl模板所在目录，子目录可以按业务进行划分
```
* (2) 打包文件配置
  [参考Requirejs optimizer](http://requirejs.org/docs/optimization.html)
  [参考example-multipage-shim](https://github.com/requirejs/example-multipage-shim)
  [参考a-require-dot-js-multipage-shimmed-site-how-to](http://robdodson.me/a-require-dot-js-multipage-shimmed-site-how-to/)
  demo 中的配置文件配置具体如下：
```javascript
// See https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    baseUrl: '.',
    // Location of the runtime config be read for the build.
    mainConfigFile: './common/commonMain.js',

    //modules: [
    //    {
    //        name: "page" // main config file
    //    }
    //],

    dir: './www-built',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: './common/commonMain',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                'angular',
                'domReady',
                'angular-route'
            ]
        },

        //Now set up a build layer for each main layer, but exclude
        //the common one. "exclude" will exclude nested
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //The "page1" and "page2" modules are **not** the targets of
        //the optimization, because shim config is in play, and
        //shimmed dependencies need to maintain their load order.
        //In this example, common.js will hold jquery, so backbone
        //needs to be delayed from loading until common.js finishes.
        //That loading sequence is controlled in page1.html.
        {
            //module names are relative to baseUrl/paths config
            name: 'home/bootstrap',
            exclude: ['./common/commonMain']
        },

        {
            //module names are relative to baseUrl
            name: 'introduction/bootstrap',
            exclude: ['./common/commonMain']
        }

    ]
})
```
打包前后请求数对比 ：
* 打包前

![打包前](http://7oxjbb.com1.z0.glb.clouddn.com/before.jpg)


* 打包输出结果

![打包输出结果](http://7oxjbb.com1.z0.glb.clouddn.com/process.jpg)
* 打包后

![打包后](http://7oxjbb.com1.z0.glb.clouddn.com/after.jpg)
可以看到请求数较打包前明显减少，代码并进行了相应的压缩处理，下载完成所有的时间更短。

(3) module.js app.js bootstrap.js commonMain.js 的相应内容
demo地址：https://github.com/xdimh/angular-route

(4) 然后对输出结果可以用nej打包进行最后的打包处理

  [1]: ./images/requirejs%E6%89%93%E5%8C%85.png "requirejs打包.png"
  [2]: ./images/1458886603840.jpg "1458886603840.jpg"
  [3]: ./images/1458889382359.jpg "1458889382359.jpg"
  [4]: ./images/1458889436139.jpg "1458889436139.jpg"
  [5]: ./images/1458889613680.jpg "1458889613680.jpg"
