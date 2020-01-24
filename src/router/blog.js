const {
		getList,
		getDetail
	} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleBlog = function(req, res){
	const method = req.method
	const url = req.url
	const path = url.split('?')[0]
	
	// 获取博客列表
	if(method == "GET" && path == "/api/blog/list"){
		const author = req.query.author || ''
		const keyword = req.query.keyword || ''
		const listData = getList(author, keyword)
		console.log("获取博客列表")
		return new SuccessModel(listData)
	}
	
	// 博客详情
	if(method == "GET" && path == "/api/blog/detail"){
		const id = req.query.id
		const data = getDetail(id)
		console.log("博客详情")
		return new SuccessModel(data)
	}
	
	// 更新博客
	if(method == "POST" && path == "/api/blog/new"){
		return {
			msg:"更新博客"
		}
	}
	
	// 更新博客
	if(method == "POST" && path == "/api/blog/update"){
		return {
			msg:"更新博客"
		}
	}
	
	// 删除博客
	if(method == "POST" && path == "/api/blog/del"){
		return {
			msg:"删除博客"
		}
	}
	
}

module.exports = handleBlog