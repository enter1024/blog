const {queryDB} = require('../db/mysql')

const getList = (author, keyword) => {
	let sqlStr = `select * from blogs where 1=1 ` // 注意后面有一个空格
	if(author) {
		sqlStr += `and author='${author}' `
	}
	if(keyword) {
		sqlStr += `and title like '%${keyword}%' `
	}
	sqlStr += `order by createtime desc;`
	
	// 返回一个Promise对象
	return queryDB(sqlStr)
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
