const mysql = require('mysql')
const { NODE_ENV_CONF } = require('../conf/db_conf')

/**
 * 查询数据库分4步走
 * 1.创建连接对象
 * 2.连接数据库
 * 3.执行查询业务
 * 4.断开连接
 */

// 创建连接对象
const con = mysql.createConnection(NODE_ENV)

// 连接
con.connect()

// 查询
function queryDB () {
    return new Promise((resolve,reject)=>{
        let sqlStr = 'select * from users' 
        con.query(sqlStr, (err, success)=>{
            if(err){
                reject(err)
                return
            }
            resolve(success)
        })
    })
}