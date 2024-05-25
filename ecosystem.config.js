module.exports = {
    apps: [
        {
            name: 'nuxt-app',  // 设置启动项目名称
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
