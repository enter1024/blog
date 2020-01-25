let NODE_ENV_CONF = null

if(process.env.NODE_ENV === 'dev') {
    // 开发环境的数据库配置，根据实际的情况修改即可
    NODE_ENV_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}else if(process.env.NODE_ENV === 'production') {
    // 生产环境的数据库配置，根据实际的情况修改即可
    NODE_ENV_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}else {
    // 默认配置
    NODE_ENV_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}

module.exports = {
    NODE_ENV_CONF
}