/**
 * 第一层
 * 该文件是配置与server有关的信息
 * 如访问端口等...
 * 如回调函数等...
 */
const http = require('http')

const PORT = 8000
const serverHandle = require('../app') // app.js 文件后的.js可以省略

const server = http.createServer(serverHandle)
server.listen(PORT)
