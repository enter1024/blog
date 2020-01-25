/**
 * author: lihuayan
 * createtime: 2020-01-26
 * description: 该文件只要是处理数据库业务(即对数据库进行增删改查)
 */

const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db_conf')

/**
 * 查询数据库分4步走
 * 1.创建连接对象
 * 2.连接数据库
 * 3.执行操作数据库业务
 * 4.断开连接(根据情况)
 */

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 连接
con.connect()

// 查询
function queryDB (sqlStr) {
    return new Promise((resolve,reject)=>{
        con.query(sqlStr, (err, success)=>{
            if(err){
                reject(err)
                return
            }
            resolve(success)
        })
    })
}

module.exports = {
    queryDB
}