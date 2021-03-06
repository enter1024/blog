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
	let sqlStr = `select * from blogs where 1=1 `
	if(id) {
		sqlStr += `and id=${id}`
	}
	return queryDB(sqlStr)
}

const newBlog = (data = {}) => {
	let title = data.title
	let content = data.content
	let createtime = Date.now()
	let author = data.author || '吴笑笑'

	let sqlStr = `insert into blogs (title,content,createtime,author) values ('${title}','${content}',${createtime},'${author}');`
	return queryDB(sqlStr)
}

const updataBlog = (data = {}) => {
	let id = data.id
	let title = data.title
	let content = data.content

	let sqlStr = `update blogs set title='${title}', content='${content}' where id='${id}';`
	return queryDB(sqlStr)
}

const deleteBlog = (data = {}) => {
	let id = data.id
	let author = data.author || '吴笑笑'
	let sqlStr = `delete from blogs where id='${id}' and author='${author}';`
	return queryDB(sqlStr)
}


module.exports = {
	getList,
	getDetail,
	newBlog,
	updataBlog,
	deleteBlog
}
