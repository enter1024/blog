/**
 * 第二层
 * 该文件只要配件项目底层的一些业务代码
 * 处理路由
 * 解析参数
 * 解析cookie
 * 返回的数据格式
 */
const querystring = require('querystring')
const handleBlog = require('./src/router/blog')
const handleUser = require('./src/router/user')

// 发送post请求的方法
const getPostData = (req) => {
	return new Promise((resolve, reject) => {
		if(req.method != 'POST'){
			resolve({})
			return
		}
		if(req.headers['content-type'] !== 'application/json'){
			resolve({})
			return
		}
		let postData = '';
		req.on('data', chunk => {
			postData += chunk
		})
		req.on('end', ()=>{
			if(!postData){
				resolve({})
				return
			}
			resolve(JSON.parse(postData))
		})
	})
}


const serverHandle = (req, res) => {
	// 设置返回格式 JSON
	res.setHeader('Content-type', 'application/json')
	
	// 获取path
	const url = req.url
	req.path = url.split('?')[0]
	
	// 获取query
	req.query = querystring.parse(url.split('?')[1])
	
	// 通过post获取数据(成功后处理路由)
	getPostData(req).then(function(data){
		req.body = data
		// 处理blog路由
		const blogData = handleBlog(req, res)
		if(blogData){
			res.end(JSON.stringify(blogData))
			return
		}
		// 处理用户登录时的路由
		const userData = handleUser(req, res)
		if(userData){
			res.end(JSON.stringify(userData))
			return
		}
		// 没有命中路由时
		res.writeHeader(404, {'Content-type':'text/plain'})
		res.write("404 Not Found\n")
		res.end()
	})
	
	
}

module.exports = serverHandle