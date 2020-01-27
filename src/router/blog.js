const {
		getList,
		getDetail,
		newBlog,
		updataBlog,
		deleteBlog
	} = require('../controller/blog_ctrl')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleBlog = function(req, res){
	const method = req.method
	const path = req.path
	const url = req.url
	const query = req.query
	
	// 获取博客列表
	if(method == "GET" && path == "/api/blog/list"){
		const author = req.query.author || ''
		const keyword = req.query.keyword || ''
		return getList(author, keyword).then(function(result){
			return new SuccessModel(result)
		})
	}
	
	// 博客详情
	if(method == "GET" && path == "/api/blog/detail"){
		const id = req.query.id
		return getDetail(id).then(data => {
			return new SuccessModel(data)
		})
	}
	
	// 新建博客
	if(method == "POST" && path == "/api/blog/new"){
		return newBlog(req.body).then(data => {
			return new SuccessModel(data)
		})
	}
	
	// 更新博客
	if(method == "POST" && path == "/api/blog/update"){
		const updataBlogData = updataBlog(req.body)
		return new SuccessModel(updataBlogData)
	}
	
	// 删除博客
	if(method == "POST" && path == "/api/blog/del"){
		const deletedId = req.query.id
		deletedData = deleteBlog(deletedId)
		return new SuccessModel(deletedData)
	}
	
}

module.exports = handleBlog