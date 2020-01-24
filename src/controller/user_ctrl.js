const loginBlog = (username, password) => {

	if(username == "zhangsan" && password == "123456"){
		return {
			loginState: true
		}
	}else {
		return {
			loginState: false
		}
	}
}

module.exports = {
	loginBlog
}
