const handleLogin = function(req, res){
	const method = req.method;
	const url = req.url;
	const path = url.split('?')[0];
	
	// 登录接口
	if(method == "POST" && path == "/api/user/login"){
		return {
			msg: "这是登录接口返回的数据"
		}
	}
}

module.exports = handleLogin