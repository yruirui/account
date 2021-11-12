const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/account-dist/'  //生产环境
        : '/',
    lintOnSave: false,
    chainWebpack: config => {
        //确定目录
        const dir = path.resolve(__dirname, 'src/assets/icons')
        config.module
            .rule('svg-sprite')  //添加一个关于svg-sprite的规则
            .test(/.svg$/)
            .include.add(dir).end()//这个规则只在dir目录生效
            .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()//使用这个loader，不解析出文件
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])//配置插件，这个插件的位置在
        config.module.rule('svg').exclude.add(dir)


    }
}