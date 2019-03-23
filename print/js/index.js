/*
 * 主要难点就是整合数据
 * 知识点：for in  循环中的索引代表对象键值对中的key
 * 访问对象的属性可以通过数组的方式 索引是key值
 * 大体思路：
 * 将数据整合成三个部分  表格里面的数据仍然用后台传递过来的
 */
function Print() {

}
Print.prototype = {
	constructor: Print,
	/*
		参数是合并过后的头部对象 
		首先计算出头部分成多少列 然后遍历头部顺序数组拼接代码
	*/
	head: function(head) {
		var content = '';
		var cloum = 12 / (this.head_size); //头部分成多少列
		content += "<div class=\"row\"><div class=\"col-md-12\">" + this.head_name + "</div></div>";
		content += "<div class=\"row\">";
		for(var i = 0; i < head.arr.length; i++) {
			content += "<div class='col-md-" + cloum + "'>";
			content += head['' + head.arr[i]].lable + ":";
			content += head['' + head.arr[i]].value + "</div>";
		}
		content += "</div>";
		return content;
	},
	/*
	 	两个参数 分别是解析过后的单页后台数据 和合并过后的数据
		根据是否分页来确定页面的大小 page_size
		遍历body中的顺序数组 生成相应代码
		for循环中只有最后一张不加页脚  
		在外部加上最后的页脚
	*/
	body: function(JSON_parsed, merged_data) {
		var content = '';
		var total_account = 0; //数量累加
		var page_size; //根据页面大小来分页
		if(this.ispage == true)
			page_size = this.body_size;
		else
			page_size = JSON_parsed.rows.length;
		content += this.head(merged_data.head);
		content += this.title(merged_data.body);
		for(var j = 0; j < JSON_parsed.rows.length; j++) {
			content += "<div class=\"row\">";
			content += "<div class=\"col-md-2\">" + (j + 1) + "</div>";
			//根据body里面数组存储的字段顺序去打印
			for(var i = 1; i < merged_data.body.arr.length; i++) { //第一个是序号在后台数据里面早不到  就不去查找 直接打印
				var temp = JSON_parsed.rows[j];
				content += "<div class=\"col-md-2\">" + temp['' + merged_data.body.arr[i]] + "</div>";
				if(merged_data.body.arr[i] == "AMOUNT") {
					total_account += temp["AMOUNT"];
				}
			}
			content += "</div>";
			if((j + 1) % page_size == 0 && ((j + 1) != JSON_parsed.rows.length)) { //只有不是最后的时候才这样加
				content += this.foot(JSON_parsed, merged_data.foot, j + 1);
				content += this.head(merged_data.head);
				content += this.title(merged_data.body);
			}

		}
		//拼接底部
		content += "<div class=\"row\">";
		content += "<div class=\"col-md-2\">合计</div>";
		content += "<div class=\"col-md-2\"></div>";
		content += "<div class=\"col-md-2\"></div>";
		content += "<div class=\"col-md-2\">" + total_account + "</div>";
		content += "<div class=\"col-md-2\"></div>";
		content += "<div class=\"col-md-2\">";
		for(var i in JSON_parsed) {
			if(i == "LUMP_SUM")
				content += parseInt(JSON_parsed[i]*100)/100;
		}
		content += "</div>";
		content += "</div>";
		content += this.foot(JSON_parsed, merged_data.foot, JSON_parsed.rows.length); //最后加上页脚
		return content;
	},

	/*
	 * 三个参数  分别是	被解析过的单个页面数据	整合过的页脚数据	当前的页面结束时所遍历到的数据索引
	 * 首先计算当前页面所 在页数  再计算出页面总数
	 * 将备注单独拿出来拼接 再遍历页脚的顺序数组  来拼接代码
	 * 最后再单独讲页码拼接上去
	 */
	foot: function(JSON_parsed, foot, j) {
		var content = '';
		var total_length = JSON_parsed.rows.length; //一张数据的总长度
		var total_page;
		var pagenumber;
		if(j % this.body_size == 0) {
			pagenumber = j / this.body_size;
		} else {
			pagenumber = parseInt(j / this.body_size) + 1;
		}
		if(total_length % this.body_size == 0) {
			total_page = total_length / this.body_size;
		} else {
			total_page = parseInt(total_length / this.body_size) + 1;
		}
		//拼接备注
		content += "<div class=\"row\">";
		content += "<div class=\"col-md-12\" id=\"memo\">";
		content += foot['' + foot.arr[0]].lable + ":";
		content += foot['' + foot.arr[0]].value;
		content += "</div>";
		content += "</div>";
		//拼接最底部
		content += "<div class=\"row\">";
		for(var i = 1; i < foot.arr.length; i++) {
			content += "<div class=\"col-md-4\">";
			content += foot['' + foot.arr[i]].lable + ":";
			content += foot['' + foot.arr[i]].value;
			content += "</div>"
		}
		content += "<div class=\"col-md-4\">第" + pagenumber + "页共" + total_page + "页</div>";
		content += "</div>";
		return content;
	},
	/*
	 *提供给外部的接口
	 * 使用if是为了重复打印
	 */
	print: function(JSON_parsed, mock) {
		console.log(JSON_parsed);
		var merged_data;
		var content = '';
		var temp;
		for(var i = 0; i < JSON_parsed.length; i++) {
			merged_data = this.data_merge(JSON_parsed[i], mock);
			temp = this.body(JSON_parsed[i], merged_data); //头部尾部也在body里面处理
			if(this.is_repeat == true) {
				for(var j = 0; j < this.repet_time; j++) {
					content += temp;
				}
			} else {
				content += temp;
			}
		}
		return content;

	},
	/*
	 * 参数是合并过后的body部分  遍历顺序数组将标题栏拼接出来
	 */
	title: function(body) {
		var content = '';
		content += "<div class=\"row\">";
		for(var i = 0; i < body.arr.length; i++) {
			content += "<div class=\"col-md-2\">" + body['' + body.arr[i]].lable + "</div>";
		}
		content += "</div>";
		return content;
	},
	/*
	 * 参数是单条后台数据   和mock上面传过来的诗句
	 * arr是顺序数组
	 * 分别生成头部 中间和尾部的数据
	 */
	data_merge: function(JSON_parsed, mock) {
		var data_merged = {
			head: {
				arr: []
			},
			body: {
				arr: []
			},
			foot: {
				arr: []
			},
		};
		for(var i in mock) {
			switch(i) {
				case "head":
					this.data_merge_find(JSON_parsed, mock.head, data_merged.head);
					break;
				case "body":
					this.data_merge_find(JSON_parsed, mock.body, data_merged.body);
					break;
				case "foot":
					this.data_merge_find(JSON_parsed, mock.foot, data_merged.foot);
					break;
			}
		}
//		console.log("合并的数据");
//		console.log(data_merged);
		return data_merged;
	},
	/*
	 * 三个参数 分别是:	单条数据	mock数据head body foot的其中一个	所要合并到的分支
	 * 将mock上面的单个数据拿到后台数据上面去早
	 * 只有在后台数据上早到了	value才有相应的值 否者为空字符串
	 */
	data_merge_find: function(JSON_parsed, mock_part, merge_part) {
		for(var j in mock_part) {
			merge_part.arr.push(j); //顺序数组
			for(var k in JSON_parsed) {
				if(j == k) {
					merge_part['' + j] = {
						lable: mock_part['' + j],
						value: JSON_parsed['' + k]
					};
				}
			}
			if(merge_part['' + j] == undefined) {
				merge_part['' + j] = {
					lable: mock_part['' + j],
					value: ''
				};
			}
		}
	}
}
Object.defineProperties(Print.prototype, {

	_ispage: {
		writable: true,
		value: true
	},
	_body_size: {
		writable: true,
		value: 6
	},
	_head_size: {
		writable: true,
		value: 3
	},
	_is_repeat: {
		writable: false,
		value: false
	},
	_repet_time: {
		writable: true,
		value: 2
	},
	_head_name: {
		writable: true,
		value: '绵阳市高水农副产品批发有限公司销售单'
	},
	ispage: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != boolean) throw "类型出错";
			} catch(e) {
				throw new Error(e);
			}
			this._ispage = newvalue;
		},
		get: function() {
			return this._ispage;
		}
	},
	body_size: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != number) throw "类型出错";
				if(newvalue < 0) throw "超出范围";
			} catch(e) {
				this._ispage = newvalue;
			}
			this._body_size = newvalue;
		},
		get: function() {
			return this._body_size;
		}
	},
	head_size: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != number) throw "类型出错";
				if(newvalue < 0) throw "超出范围";
			} catch(e) {
				this._ispage = newvalue;
			}
			this._head_size = newvalue;
		},
		get: function() {
			return this._head_size;
		}
	},
	is_repeat: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != boolean) throw "类型出错";
			} catch(e) {
				this._ispage = newvalue;
			}
			this._is_repeat = newvalue;
		},
		get: function() {
			return this._is_repeat;
		}
	},
	repet_time: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != number) throw "类型出错";
				if(newvalue < 0) throw "超出范围";
			} catch(e) {
				this._ispage = newvalue;
			}
			this._repet_time = newvalue;
		},
		get: function() {
			return this._repet_time;
		}
	},
	head_name: {
		set: function(newvalue) {
			try {
				if(typeof newvalue != string) throw "类型出错";
			} catch(e) {
				this._ispage = newvalue;
			}
			this._head_name = newvalue;
		},
		get: function() {
			return this._head_name;
		}
	}
});