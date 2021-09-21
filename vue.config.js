
const path = require('path')

module.exports={
    lintOnSave:false,
    chainWebpack:config=>{
        //确定目录
        const dir=path.resolve(__dirname,'src/assets/icons')
        config.module
         .rule('svg-sprite')  //添加一个关于svg-sprite的规则
         .test(/.svg$/)
         .include.add(dir).end()//这个规则只在dir目录生效
         .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()//使用这个loader，不解析出文件
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])//配置插件，这个插件的位置在
        config.module.rule('svg').exclude().add(dir)


    }
}