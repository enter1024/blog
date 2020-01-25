let MYSQL_CONF = null

// process是node.js主流程的全局变量
if(process.env.NODE_ENV === 'dev') {
    // 开发环境的数据库配置，根据实际的情况修改即可
    MYSQL_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}else if(process.env.NODE_ENV === 'production') {
    // 生产环境的数据库配置，根据实际的情况修改即可
    MYSQL_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}else {
    // 默认配置
    MYSQL_CONF ={
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "myblog"
    }
}

module.exports = {
    MYSQL_CONF
}