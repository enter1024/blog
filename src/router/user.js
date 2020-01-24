const {loginBlog} = require('../controller/user_ctrl')
const {SuccessModel, ErrorModel} = require('../model/resModel')

const handleLogin = function(req, res){
	const method = req.method;
	const url = req.url;
	const path = url.split('?')[0];
	
	// 登录接口
	if(method == "POST" && path == "/api/user/login"){
		const loginData = loginBlog(req.body.username, req.body.password)
		if(loginData.loginState){
			return new SuccessModel("登录成功")
		}else {
			return new ErrorModel("登录失败")
		}
	}
}

module.exports = handleLogin