const {loginBlog} = require('../controller/user_ctrl')
const {SuccessModel, ErrorModel} = require('../model/resModel')

const handleLogin = function(req, res){
	const method = req.method;
	const url = req.url;
	const path = url.split('?')[0];
	
	// 登录接口
	if(method == "POST" && path == "/api/user/login"){
		return loginBlog(req.body.username, req.body.password).then(data => {
			if(data.length){
				return new SuccessModel(data)
			}else {
				return new ErrorModel("用户名或密码错误")
			}
		})
	}
}

module.exports = handleLogin