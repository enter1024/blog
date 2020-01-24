const getList = (author, keyword) => {
	return [{
		id: 1,
		title: '标题1',
		content: '内容1',
		createTime: 1576949691427,
		author: 'zhangsan'
	},{
		id: 2,
		title: '标题2222222',
		content: '内容222222222222222222',
		createTime: 1576949740621,
		author: 'lisi'
	}]
}

const getDetail = (id) => {
	// 返回id对应的数据
	console.log("id：", id)
	return {
		id: 2,
		title: '通过id获取的数据',
		content: '内容222222222222222222',
		createTime: 1576949740621,
		author: 'lisi'
	}
}

const newBlog = (data = {}) => {
	return {
		id: 3
	}
}

const updataBlog = (data = {}) => {
	return {
		updata: true
	}
}

const deleteBlog = (data = {}) => {
	return {
		updata: true
	}
}


module.exports = {
	getList,
	getDetail,
	newBlog,
	updataBlog,
	deleteBlog
}
