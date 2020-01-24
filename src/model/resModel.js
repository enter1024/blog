class BaseModel {
	constructor(data,str) {
		if(typeof data == 'string'){
			this.message = data;
			data = null;
			str = null;
		}
		if(data){
			this.data = data;
		}
		if(str){
			this.message = str;
		}
	}
}

class SuccessModel extends BaseModel {
	constructor(data,str) {
		super(data, str);
		this.errorNo = 0;
	}
}

class ErrorModel extends BaseModel {
	constructor(data, str){
		super(data,str);
		this.errorNo = -1;
	}
}

module.exports = {
	SuccessModel,
	ErrorModel
}
