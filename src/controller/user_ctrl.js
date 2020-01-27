const {queryDB} = require('../db/mysql')
const loginBlog = (username, password) => {
	let sqlStr = `select username, realname from users where username='${username}' and password='${password}';`

	return queryDB(sqlStr).then(data => {
		return data
	})
}

module.exports = {
	loginBlog
}
