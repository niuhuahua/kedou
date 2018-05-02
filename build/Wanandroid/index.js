(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73)
	__webpack_require__(62)
	__webpack_require__(74)
	__webpack_require__(91)
	var $app_template$ = __webpack_require__(92)
	var $app_style$ = __webpack_require__(93)
	var $app_script$ = __webpack_require__(94)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/c-input', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "c-input"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "c-input-content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.label}
	          },
	          "classList": [
	            "input-label"
	          ],
	          "shown": function () {return this.label}
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": function () {return this.type},
	            "placeholder": function () {return this.placeholder},
	            "value": function () {return this.inputValue}
	          },
	          "classList": [
	            "input-native"
	          ],
	          "events": {
	            "change": "onInput"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "clear-box"
	          ],
	          "shown": function () {return this.clearable},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "input-clear"
	              ],
	              "shown": function () {return this.clear},
	              "events": {
	                "click": "onClear"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "×"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  ".c-input-content": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "fontSize": "30px",
	    "paddingRight": "20px",
	    "height": "80px",
	    "alignItems": "center"
	  },
	  ".input-label": {
	    "width": "120px"
	  },
	  ".input-native": {
	    "flex": 1,
	    "fontSize": "30px"
	  },
	  ".clear-box": {
	    "height": "40px",
	    "width": "40px"
	  },
	  ".input-clear": {
	    "display": "flex",
	    "height": "40px",
	    "width": "40px",
	    "borderRadius": "25px",
	    "backgroundColor": "#dddddd"
	  },
	  ".input-clear text": {
	    "width": "100%",
	    "textAlign": "center",
	    "fontSize": "35px",
	    "color": "#ffffff",
	    "marginTop": "-5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "input-clear"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['label', 'placeholder', 'type', 'value', 'clearable', 'text', 'imgIcon'],
	  propsDefault: {
	    placeholder: '请输入...',
	    type: 'text',
	    value: '',
	    clearable: false
	  },
	  data: function data() {
	    return {
	      clear: false,
	      inputValue: ''
	    };
	  },
	  onInit: function onInit() {
	    this.inputValue = this.value;
	  },
	  onInput: function onInput(_ref) {
	    var value = _ref.value;
	
	    this.clear = value !== '';
	    this.inputValue = value;
	    this.$dispatch('input', { value: value });
	  },
	  onClear: function onClear() {
	    this.clear = false;
	    this.inputValue = '';
	    this.$dispatch('clear', { value: this.value });
	  }
	};}

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCollectArticle = getCollectArticle;
	exports.collectArticle = collectArticle;
	exports.collectArticleAdd = collectArticleAdd;
	exports.uncollectArticle = uncollectArticle;
	exports.uncollect = uncollect;
	exports.getCollectWeb = getCollectWeb;
	exports.collectWeb = collectWeb;
	exports.editCollectWeb = editCollectWeb;
	exports.deleteCollectWeb = deleteCollectWeb;
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getCollectArticle(page) {
	  return _index2.default.getCollectArticle(page).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function collectArticle(id) {
	  return _index2.default.collectArticle(id).then(function (response) {
	    var value = JSON.parse(response.data);
	    if (value.errorCode === -1) {
	      return Promise.reject('请先登录');
	    } else {
	      return Promise.resolve(value.data);
	    }
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function collectArticleAdd(title, author, link) {
	  return _index2.default.collectArticleAdd({
	    title: title,
	    author: author,
	    link: link
	  }).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function uncollectArticle(id) {
	  return _index2.default.uncollectArticle(id).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function uncollect(id, originId) {
	  return _index2.default.uncollect(id, originId).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function getCollectWeb() {
	  return _index2.default.getCollectWeb().then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function collectWeb(name, link) {
	  return _index2.default.collectWeb({
	    name: name,
	    link: link
	  }).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function editCollectWeb(id, name, link) {
	  return _index2.default.editCollectWeb({
	    id: id,
	    name: name,
	    link: link
	  }).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function deleteCollectWeb(id) {
	  return _index2.default.deleteCollectWeb(id).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fetch = $app_require$('@app-module/system.fetch');
	var storage = $app_require$('@app-module/system.storage');
	
	var API_ROOT = 'http://www.wanandroid.com/';
	
	var headers = {};
	
	function getAuth() {
	  return new Promise(function (resolve, reject) {
	    storage.get({
	      key: 'auth',
	      success: function success(data) {
	        headers.Cookie = data;
	        resolve(true);
	      },
	      fail: function fail(data, code) {
	        resolve(false);
	      }
	    });
	  });
	}
	
	function realFetch(url) {
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
	
	  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
	  console.log('┃ url: ', API_ROOT + url);
	  console.log('┃ method: ', method);
	  console.log('┃ data: ', JSON.stringify(data));
	  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
	
	  return new Promise(function (resolve, reject) {
	    fetch.fetch({
	      url: API_ROOT + url,
	      data: data,
	      header: headers,
	      method: method,
	      success: function success(data) {
	        resolve(data);
	      },
	      fail: function fail(data, code) {
	        reject(data);
	      }
	    });
	  });
	}
	
	function withAuth(url) {
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
	  var canSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	  return getAuth().then(function (auth) {
	    if (auth || canSkip) {
	      return realFetch(url, data, method);
	    } else {
	      return new Promise(function (resolve, reject) {
	        reject('请先登录！');
	      });
	    }
	  });
	}
	
	function post(url) {
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (config.withAuth) {
	    return withAuth(url, data, 'post', config.canSkip);
	  } else {
	    return realFetch(url, data, 'post');
	  }
	}
	
	function get(url) {
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (config.withAuth) {
	    return withAuth(url, data, 'get', config.canSkip);
	  } else {
	    return realFetch(url, data, 'get');
	  }
	}
	
	exports.default = {
	  /**
	   * 获取首页banner列表
	   */
	  getBanner: function getBanner(success, fail) {
	    return get('banner/json', null);
	  },
	
	  /**
	   * 获取首页文章列表
	   */
	  getArticle: function getArticle(page) {
	    return get('article/list/' + page + '/json', null, {
	      withAuth: true,
	      canSkip: true
	    });
	  },
	
	  /**
	   * 获取体系分类
	   */
	  getClassifyList: function getClassifyList() {
	    return get('tree/json', null);
	  },
	
	  /**
	   * 根据分类获取文章列表
	   */
	  getArticleByClassify: function getArticleByClassify(page, cid) {
	    return get('article/list/' + page + '/json?cid=' + cid, null, {
	      withAuth: true,
	      canSkip: true
	    });
	  },
	
	  /**
	   * 登录
	   */
	  login: function login(params) {
	    return post('user/login', params);
	  },
	
	  /**
	   * 注册
	   */
	  register: function register(params) {
	    return post('user/register', params);
	  },
	
	  /**
	   * 获取收藏文章列表
	   */
	  getCollectArticle: function getCollectArticle(page) {
	    return get('lg/collect/list/' + page + '/json', null, { withAuth: true });
	  },
	
	  /**
	   * 收藏站内文章
	   */
	  collectArticle: function collectArticle(id) {
	    return post('lg/collect/' + id + '/json', null, { withAuth: true });
	  },
	
	  /**
	   * 收藏站外文章
	   */
	  collectArticleAdd: function collectArticleAdd(params) {
	    return post('lg/collect/add/json', params, { withAuth: true });
	  },
	
	  /**
	   * 从文章列表取消收藏
	   */
	  uncollectArticle: function uncollectArticle(id) {
	    return post('lg/uncollect_originId/' + id + '/json', null, { withAuth: true });
	  },
	
	  /**
	   * 从收藏列表取消收藏
	   */
	  uncollect: function uncollect(id, originId) {
	    return post('lg/uncollect/' + id + '/json', { originId: originId }, { withAuth: true });
	  },
	
	  /**
	   * 获取收藏网站列表
	   */
	  getCollectWeb: function getCollectWeb() {
	    return get('lg/collect/usertools/json', null, { withAuth: true });
	  },
	
	  /**
	   * 收藏网站
	   */
	  collectWeb: function collectWeb(params) {
	    return post('lg/collect/addtool/json', params, { withAuth: true });
	  },
	
	  /**
	   * 编辑收藏的网址
	   */
	  editCollectWeb: function editCollectWeb(params) {
	    return post('lg/collect/updatetool/json', params, { withAuth: true });
	  },
	
	  /**
	   * 删除收藏的网址
	   */
	  deleteCollectWeb: function deleteCollectWeb(id) {
	    return post('lg/collect/deletetool/json', { id: id }, { withAuth: true });
	  }
	};

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)
	__webpack_require__(32)
	var $app_template$ = __webpack_require__(36)
	var $app_style$ = __webpack_require__(37)
	var $app_script$ = __webpack_require__(38)
	
	$app_define$('@app-component/login', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(29)
	var $app_style$ = __webpack_require__(30)
	var $app_script$ = __webpack_require__(31)
	
	$app_define$('@app-component/input-pwd', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "login_phone"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "iconImg_div"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.iconimg}
	          },
	          "classList": [
	            "iconImg"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "block",
	      "attr": {},
	      "shown": function () {return this.ispwd},
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "password",
	            "value": function () {return this.pwdValue},
	            "placeholder": "请输入密码"
	          },
	          "shown": function () {return this.eyePwdClose},
	          "events": {
	            "change": "onInputVal"
	          },
	          "classList": [
	            "login_Input"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "value": function () {return this.pwdValue},
	            "placeholder": "请输入密码"
	          },
	          "shown": function () {return !(this.eyePwdClose)},
	          "events": {
	            "change": "onInputVal"
	          },
	          "classList": [
	            "login_Input"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "eyeImg_div"
	          ],
	          "shown": function () {return this.eyePwdClose},
	          "events": {
	            "click": "changeType"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/Image/kdimg/login/eye_close.png"
	              },
	              "classList": [
	                "iconImgpwd"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "eyeImg_div"
	          ],
	          "shown": function () {return !(this.eyePwdClose)},
	          "events": {
	            "click": "changeType"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/Image/kdimg/login/eye_open.png"
	              },
	              "classList": [
	                "iconImgpwd"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "block",
	      "attr": {},
	      "shown": function () {return !(this.ispwd)},
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "value": function () {return this.phoneVlaue},
	            "placeholder": "请输入手机号码"
	          },
	          "events": {
	            "change": "onInputValPhone"
	          },
	          "classList": [
	            "phone_Input"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  ".login_phone": {
	    "width": "640px",
	    "height": "90px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#a1a1a1",
	    "borderRightColor": "#a1a1a1",
	    "borderBottomColor": "#a1a1a1",
	    "borderLeftColor": "#a1a1a1",
	    "borderRadius": "6px",
	    "justifyContent": "center",
	    "marginBottom": "30px"
	  },
	  ".login_phone .iconImg_div": {
	    "width": "70px",
	    "height": "90px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "iconImg_div"
	        }
	      ]
	    }
	  },
	  ".login_phone .eyeImg_div": {
	    "width": "80px",
	    "height": "90px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "eyeImg_div"
	        }
	      ]
	    }
	  },
	  ".login_phone .login_Input": {
	    "fontSize": "30px",
	    "width": "490px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_Input"
	        }
	      ]
	    }
	  },
	  ".login_phone .iconImg": {
	    "width": "60px",
	    "height": "60px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "iconImg"
	        }
	      ]
	    }
	  },
	  ".login_phone .phone_Input": {
	    "fontSize": "30px",
	    "width": "550px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "phone_Input"
	        }
	      ]
	    }
	  },
	  ".login_phone .iconImgpwd": {
	    "width": "45px",
	    "height": "45px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "login_phone"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "iconImgpwd"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['ispwd', 'iconimg'],
	    data: function data() {
	        return {
	            eyePwdClose: true,
	            pwdValue: '',
	            phoneVlaue: ''
	        };
	    },
	    onInit: function onInit() {
	        this.$on('pChangeInput', this.pChangeInput);
	    },
	    onInputVal: function onInputVal(_ref) {
	        var value = _ref.value;
	
	        this.pwdValue = value;
	        this.$dispatch('inputchange', { value: value });
	    },
	    onInputValPhone: function onInputValPhone(_ref2) {
	        var value = _ref2.value;
	
	        this.pwdphoneVlaueValue = value;
	        this.$dispatch('inputchange', { value: value });
	    },
	    changeType: function changeType() {
	        this.eyePwdClose = !this.eyePwdClose;
	    },
	    pChangeInput: function pChangeInput(_ref3) {
	        var value = _ref3.detail.value;
	
	        this.phoneVlaue = value;
	    }
	};}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(33)
	var $app_style$ = __webpack_require__(34)
	var $app_script$ = __webpack_require__(35)
	
	$app_define$('@app-component/c-btn', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.btntext}
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "toNext"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  ".btn": {
	    "display": "flex",
	    "color": "#ffffff",
	    "borderRadius": "6px",
	    "textAlign": "center",
	    "lineHeight": "90px",
	    "backgroundColor": "#FF9900",
	    "width": "640px",
	    "height": "90px"
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	exports.default = {
	     props: ['btntext'],
	     data: function data() {},
	     toNext: function toNext() {
	          console.log("子组件按钮被点击");
	          this.$dispatch('clickbtn', {});
	     }
	};}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "login_div"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "login_top"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "../Common/Image/kdimg/login/logo.png"
	          },
	          "classList": [
	            "logo_img"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "input-pwd",
	      "attr": {
	        "ispwd": "",
	        "iconimg": "../Common/Image/kdimg/login/phone.png"
	      },
	      "events": {
	        "inputchange": "inputPhone"
	      }
	    },
	    {
	      "type": "input-pwd",
	      "attr": {
	        "ispwd": "true",
	        "iconimg": "../Common/Image/kdimg/login/pwd.png"
	      },
	      "events": {
	        "inputchange": "inputPwd"
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "remember_div"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "remiber_div"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "shown": function () {return this.remember},
	              "events": {
	                "click": "toChangeRemember"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common/Image/kdimg/login/selected@2x.png"
	                  },
	                  "classList": [
	                    "icon_member"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "shown": function () {return !(this.remember)},
	              "events": {
	                "click": "toChangeRemember"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common/Image/kdimg/login/marquee@2x.png"
	                  },
	                  "classList": [
	                    "icon_member"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "style": {
	                "justifyContent": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "记住我"
	                  },
	                  "classList": [
	                    "remember_text"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "style": {
	            "height": "90px",
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "忘记密码？"
	              },
	              "classList": [
	                "foget_text"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "c-btn",
	      "attr": {
	        "btntext": "登录"
	      },
	      "events": {
	        "clickbtn": "toLogin"
	      }
	    }
	  ]
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  ".login_div": {
	    "flexDirection": "column",
	    "width": "100%",
	    "alignItems": "center"
	  },
	  ".login_top": {
	    "height": "326px",
	    "width": "100%",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".logo_img": {
	    "width": "290px",
	    "height": "120px"
	  },
	  ".remember_div": {
	    "width": "640px",
	    "justifyContent": "space-between",
	    "height": "90px"
	  },
	  ".icon_member": {
	    "width": "35px",
	    "height": "35px"
	  },
	  ".remiber_div": {
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "height": "90px"
	  },
	  ".remember_text": {
	    "fontSize": "30px",
	    "color": "#666666",
	    "marginLeft": "20px"
	  },
	  ".foget_text": {
	    "fontSize": "30px",
	    "color": "#ff7200"
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _kduser = __webpack_require__(39);
	
	exports.default = {
	  data: function data() {
	    return {
	      loginData: {
	        user_mobile: '',
	        user_pass: ''
	      },
	      user_mobile: '',
	      remember: true
	    };
	  },
	  onInit: function onInit() {
	    var that = this;
	    this.$app.$def.storage.get({
	      key: 'userRember',
	      success: function (data) {
	        if (data) {
	          var dataMsg = JSON.parse(data);
	          that.$broadcast("pChangeInput", { value: dataMsg.user_mobile });
	        }
	      }.bind(this),
	      fail: function (data, code) {
	        console.log("获取token失效");
	      }.bind(this)
	    });
	  },
	  inputPhone: function inputPhone(_ref) {
	    var value = _ref.detail.value;
	
	    this.loginData.user_mobile = value;
	  },
	  inputPwd: function inputPwd(_ref2) {
	    var value = _ref2.detail.value;
	
	    this.loginData.user_pass = value;
	  },
	  toChangeRemember: function toChangeRemember() {
	    this.remember = !this.remember;
	  },
	  toLogin: function toLogin() {
	    var _this = this;
	
	    var that = this;
	    if (that.loginData.user_mobile === null || that.loginData.user_pass.length < 1) {
	      this.$app.$def.prompt.showToast({ message: '用户名长度不能小于6' });
	    } else {
	      (0, _kduser.login)(this.loginData.user_mobile, this.loginData.user_pass).then(function (data) {
	        if (that.remember) {
	          var dataMsg = data[0];
	          that.$app.$def.storage.set({
	            key: 'userRember',
	            value: dataMsg
	          });
	        } else {
	          that.$app.$def.storage.set({
	            key: 'userRember',
	            value: ''
	          });
	        }
	
	        that.$app.$def.router.push({
	          uri: 'KdBottom'
	        });
	      }).catch(function (err) {
	        console.log("登录出错了--->", JSON.stringify(err));
	        _this.$app.$def.prompt.showToast({ message: err });
	      });
	    }
	  }
	};}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.getUserInfo = getUserInfo;
	
	var _http = __webpack_require__(40);
	
	var _http2 = _interopRequireDefault(_http);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storage = $app_require$('@app-module/system.storage'); // // import fetch from './fetch'
	// export default class User {
	//     static async login(param){//登录
	//         let url = "user1000/user_login";
	//         // return fetch.get(url,param);
	//     }
	
	// }
	
	function login(username, password) {
	  return _http2.default.login({
	    user_mobile: username,
	    user_pass: password
	  }).then(function (response) {
	    var value = JSON.parse(response.data);
	    console.log("-------执行登录--->", JSON.stringify(value));
	    if (value.Tadpole.Head.code == "S0000") {
	      console.log("lohin---success--");
	      storage.set({
	        key: 'token',
	        value: value.Tadpole.Body[0].token
	      });
	      console.log("登录的token----->", JSON.stringify(value.Tadpole.Body[0].token));
	      storage.set({
	        key: 'user',
	        value: value.Tadpole.Body[0]
	      });
	      return Promise.resolve(value.Tadpole.Body);
	    } else {
	      console.log("login----->err======>");
	      return Promise.reject(value.Tadpole.Head.msg);
	    }
	  }).catch(function (err) {
	    return Promise.reject('登录失败');
	  });
	}
	
	function getUserInfo(param) {
	  return _http2.default.getApi('/user1000/user_get', param).then(function (res) {
	    //  console.log("获取用户信息---成功------>",JSON.stringify(res))
	  }).catch(function (err) {
	    console.log("用户信息---失败------>", JSON.stringify(err));
	  });
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.storage');
	
	var _system6 = _interopRequireDefault(_system5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function request(method, url, data) {
	    var resurl = 'http://tshop.zrbao.net/index.php/api/';
	    // let resurl = 'http://tshop.zrbao.net/index.php/apiwl/' 
	    var baseData = { 'Tadpole': { "Tadpole": { "Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": {} } } };
	    Object.assign(baseData['Tadpole']['Tadpole']['Body'], data);
	    return new Promise(function (resolve, reject) {
	        _system2.default.fetch({
	            url: resurl + url,
	            data: baseData,
	            method: method,
	            success: function success(data) {
	                console.log("请求的参数------baseData----->", JSON.stringify(baseData));
	                console.log("requestData---->", JSON.stringify(data));
	                resolve(data);
	            },
	            fail: function fail(data, code) {
	                console.log("---------请求失败============>", JSON.stringify(data));
	                reject(data);
	            }
	        });
	    });
	}
	
	function get(url, data) {
	    return request('get', url, data);
	}
	
	exports.default = {
	    /**
	    * 登录
	    */
	    login: function login(params) {
	        return get('user1000/user_login', params);
	    },
	    getApi: function getApi(url, data) {
	        return get(url, data);
	    }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home"
	  ],
	  "children": [
	    {
	      "type": "stack",
	      "attr": {},
	      "classList": [
	        "header_avatar"
	      ],
	      "shown": function () {return this.isLogin},
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.user.avatar_thumb}
	          },
	          "classList": [
	            "avtar"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.user.user_nicename}
	          },
	          "classList": [
	            "username"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "stack",
	      "attr": {},
	      "classList": [
	        "header_avatar"
	      ],
	      "shown": function () {return !(this.isLogin)},
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "../Common/Image/kdimg/home/defaultIcon.png"
	          },
	          "classList": [
	            "avtar"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "登录/注册"
	          },
	          "classList": [
	            "username"
	          ],
	          "events": {
	            "click": "toLogin"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "home_secon"
	      ],
	      "shown": function () {return this.cunfu=='1'},
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "home_seco_two"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "two_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.user.user_commision}
	                  },
	                  "classList": [
	                    "two_text",
	                    "text_num",
	                    "redColor"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "two_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "收益"
	                  },
	                  "classList": [
	                    "two_text",
	                    "text_name",
	                    "redColor"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "style": {
	            "borderTopWidth": "1px",
	            "borderRightWidth": "1px",
	            "borderBottomWidth": "1px",
	            "borderLeftWidth": "1px",
	            "borderStyle": "solid",
	            "borderTopColor": "#c1c1c1",
	            "borderRightColor": "#c1c1c1",
	            "borderBottomColor": "#c1c1c1",
	            "borderLeftColor": "#c1c1c1",
	            "width": "1px",
	            "height": "70px",
	            "marginTop": "25px"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "home_seco_two"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "two_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.user.score}
	                  },
	                  "classList": [
	                    "two_text",
	                    "text_num",
	                    "orangeColor"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "two_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "积分"
	                  },
	                  "classList": [
	                    "two_text",
	                    "text_name",
	                    "orangeColor"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "home_secon_another"
	      ],
	      "shown": function () {return this.cunfu=='2'}
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "home_three"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "home_three_two"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_full_order.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "全部订单"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_obligations.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "代付款"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_daisouhuo.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ],
	                  "style": {
	                    "width": "78px"
	                  }
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "待收货"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_evaluation.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "待评价"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "home_three_two"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_message.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "消息中心"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_account.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "账号管理"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_service.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "客服"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "top_four"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common//Image//kdimg//home/icon_about.png"
	                  },
	                  "classList": [
	                    "four_img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "关于我们"
	                      },
	                      "classList": [
	                        "four_text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
	  ".home": {
	    "flexDirection": "column"
	  },
	  ".home .header_avatar": {
	    "width": "100%",
	    "height": "470px",
	    "backgroundImage": "../Common/Image/kdimg/home/background.png",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header_avatar"
	        }
	      ]
	    }
	  },
	  ".home .header_avatar .avtar": {
	    "width": "120px",
	    "height": "120px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header_avatar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "avtar"
	        }
	      ]
	    }
	  },
	  ".home .header_avatar .username": {
	    "fontSize": "26px",
	    "color": "#ffffff",
	    "marginTop": "180px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header_avatar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "username"
	        }
	      ]
	    }
	  },
	  ".home .home_secon": {
	    "height": "150px",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#e1e1e1",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .home_seco_two": {
	    "width": "50%",
	    "height": "100%",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_seco_two"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .redColor": {
	    "color": "#F00000",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "redColor"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .orangeColor": {
	    "color": "#ff9600",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "orangeColor"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .two_text": {
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "two_text"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .text_num": {
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text_num"
	        }
	      ]
	    }
	  },
	  ".home .home_secon .text_name": {
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text_name"
	        }
	      ]
	    }
	  },
	  ".home .home_secon_another": {
	    "marginTop": "30px",
	    "height": "1px",
	    "width": "100%",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#e1e1e1",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_secon_another"
	        }
	      ]
	    }
	  },
	  ".home .home_three": {
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_three"
	        }
	      ]
	    }
	  },
	  ".home .home_three_two": {
	    "height": "188px",
	    "borderBottomColor": "#e1e1e1",
	    "borderBottomWidth": "1px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_three_two"
	        }
	      ]
	    }
	  },
	  ".home .top_four": {
	    "width": "25%",
	    "height": "188px",
	    "borderLeftWidth": "1px",
	    "borderLeftColor": "#e1e1e1",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "top_four"
	        }
	      ]
	    }
	  },
	  ".home .four_img": {
	    "width": "68px",
	    "height": "68px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "four_img"
	        }
	      ]
	    }
	  },
	  ".home .four_text": {
	    "fontSize": "24px",
	    "color": "#2d2d2d",
	    "marginTop": "22px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "four_text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "refresh",
	  "attr": {
	    "refreshing": function () {return this.isRefreshing}
	  },
	  "events": {
	    "refresh": "refresh"
	  },
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "home-page"
	      ],
	      "events": {
	        "scrollbottom": "loadMoreData"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "banner"
	          },
	          "children": [
	            {
	              "type": "swiper",
	              "attr": {
	                "autoplay": "true",
	                "interval": "4000"
	              },
	              "classList": [
	                "banner"
	              ],
	              "children": [
	                {
	                  "type": "stack",
	                  "attr": {},
	                  "classList": [
	                    "banner"
	                  ],
	                  "repeat": function () {return this.bannerlist},
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.imagePath}
	                      },
	                      "classList": [
	                        "banner-image"
	                      ],
	                      "events": {
	                        "click": function (evt) {this.openArticle(this.$item.url,'',this.$item.title,evt)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.title}
	                      },
	                      "classList": [
	                        "banner-title"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "tip"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "最新博文--长按可分享文章~"
	              },
	              "classList": [
	                "text-tip"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.articleList},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "article"
	              },
	              "classList": [
	                "article-item"
	              ],
	              "events": {
	                "click": function (evt) {this.openArticle(this.$item.link,this.$item.projectLink,this.$item.title,evt)},
	                "longpress": function (evt) {this.shareLink(this.$item.link,evt)}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "style": {
	                    "display": "flex"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "show": function () {return this.$item.fresh},
	                        "value": "新"
	                      },
	                      "classList": [
	                        "tag"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.title}
	                      },
	                      "classList": [
	                        "text-title"
	                      ],
	                      "style": {
	                        "flex": 1
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.collectIcon[this.$item.collect?1:0]}
	                      },
	                      "style": {
	                        "width": "52px",
	                        "height": "52px"
	                      },
	                      "events": {
	                        "click": function (evt) {this.clickCollect(this.$item,evt)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "article-tip"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return '分类: ' + (this.$item.superChapterName) + '/' + (this.$item.chapterName)}
	                      },
	                      "classList": [
	                        "tip"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "article-tip"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return '作者: ' + (this.$item.author)}
	                      },
	                      "classList": [
	                        "tip"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.niceDate}
	                      },
	                      "classList": [
	                        "time"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "loadMore"
	          },
	          "classList": [
	            "load-more"
	          ],
	          "shown": function () {return this.articleList.length>0},
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular",
	                "show": function () {return this.hasMoreData}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "show": function () {return this.hasMoreData},
	                "value": "加载更多"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "show": function () {return !this.hasMoreData},
	                "value": "没有更多了~"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {
	  ".banner": {
	    "width": "100%",
	    "height": "420px"
	  },
	  ".banner-image": {
	    "width": "100%",
	    "height": "420px"
	  },
	  ".banner-title": {
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "textAlign": "center",
	    "height": "90px",
	    "width": "100%",
	    "color": "#ffffff",
	    "backgroundColor": "#000000",
	    "opacity": 0.5
	  },
	  ".article-item": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "flexDirection": "column",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".text-tip": {
	    "width": "100%",
	    "paddingTop": "20px",
	    "paddingRight": "10px",
	    "paddingBottom": "20px",
	    "paddingLeft": "10px",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".article-item .text-title": {
	    "fontSize": "30px",
	    "color": "#2e3135",
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "marginBottom": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text-title"
	        }
	      ]
	    }
	  },
	  ".article-item .article-tip": {
	    "display": "flex",
	    "flexDirection": "row",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        }
	      ]
	    }
	  },
	  ".article-tip .tip": {
	    "fontSize": "26px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tip"
	        }
	      ]
	    }
	  },
	  ".article-tip .time": {
	    "fontSize": "26px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "time"
	        }
	      ]
	    }
	  },
	  ".time": {
	    "flex": 1,
	    "textAlign": "right"
	  },
	  ".tag": {
	    "fontSize": "22px",
	    "color": "#FF0000",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderTopColor": "#FF0000",
	    "borderRightColor": "#FF0000",
	    "borderBottomColor": "#FF0000",
	    "borderLeftColor": "#FF0000",
	    "marginRight": "10px",
	    "paddingTop": "2px",
	    "paddingRight": "2px",
	    "paddingBottom": "2px",
	    "paddingLeft": "2px",
	    "height": "32px"
	  },
	  ".load-more": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(61);
	
	var _collect = __webpack_require__(8);
	
	exports.default = {
	  data: {
	    bannerlist: [],
	    articleList: [],
	    page: 0,
	    hasMoreData: true,
	    isRefreshing: false,
	    collectIcon: ['../Common/Image/icon_uncollect.png', '../Common/Image/icon_collect.png']
	  },
	  onInit: function onInit() {
	    this.refresh({ refreshing: true });
	  },
	  getBanner: function getBanner() {
	    var _this = this;
	
	    (0, _home.getBanner)().then(function (data) {
	      _this.bannerlist = data;
	    });
	  },
	  getArticle: function getArticle() {
	    var _this2 = this;
	
	    (0, _home.getArticle)(this.page).then(function (data) {
	      _this2.hasMoreData = !data.over;
	      if (_this2.page > 0) {
	        _this2.articleList = _this2.articleList.concat(data.datas);
	      } else {
	        _this2.isRefreshing = false;
	        _this2.articleList = data.datas;
	      }
	    }).catch(function (err) {
	      _this2.isRefreshing = false;
	    });
	  },
	  loadMoreData: function loadMoreData() {
	    if (this.hasMoreData) {
	      this.page++;
	      this.getArticle();
	    }
	  },
	  openArticle: function openArticle(link, projectLink, title) {
	    var url = projectLink === '' ? link : projectLink;
	    if (url !== '') {
	      this.$app.$def.router.push({
	        uri: 'Webview',
	        params: {
	          title: title,
	          url: url
	        }
	      });
	    }
	  },
	  refresh: function refresh(evt) {
	    this.isRefreshing = evt.refreshing;
	    this.page = 0;
	    this.getBanner();
	    this.getArticle();
	  },
	  clickCollect: function clickCollect(item) {
	    if (item.collect) {
	      this.uncollect(item.id);
	    } else {
	      this.collect(item.id);
	    }
	  },
	  uncollect: function uncollect(id) {
	    var _this3 = this;
	
	    (0, _collect.uncollectArticle)(id).then(function (data) {
	      _this3.refresh({ refreshing: true });
	      _this3.$app.$def.prompt.showToast({ message: '已取消收藏' });
	    }).catch(function (err) {
	      _this3.$app.$def.prompt.showToast({ message: '取消收藏失败' });
	    });
	  },
	  collect: function collect(id) {
	    var _this4 = this;
	
	    (0, _collect.collectArticle)(id).then(function (data) {
	      _this4.refresh({ refreshing: true });
	      _this4.$app.$def.prompt.showToast({ message: '收藏成功~' });
	    }).catch(function (err) {
	      _this4.$app.$def.prompt.showToast({ message: '收藏失败，登录之后才可收藏~' });
	    });
	  },
	  shareLink: function shareLink(url) {
	    this.$app.$def.share.share({
	      type: "text/plain",
	      data: url
	    });
	  }
	};}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBanner = getBanner;
	exports.getArticle = getArticle;
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getBanner() {
	  return _index2.default.getBanner().then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function getArticle() {
	  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  return _index2.default.getArticle(page).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(63)
	var $app_style$ = __webpack_require__(64)
	var $app_script$ = __webpack_require__(65)
	
	$app_define$('@app-component/classify', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "classify-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "classify"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "一级分类"
	          },
	          "classList": [
	            "title"
	          ]
	        },
	        {
	          "type": "list",
	          "attr": {},
	          "classList": [
	            "classify-list"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.classifyList},
	                "key": "index",
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "parent"
	                  },
	                  "classList": [
	                    "classify-item"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.clickParent(this.index,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.name}
	                      },
	                      "classList": function () {return [this.parentIndex===this.index?'active':'classify-text']}
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "shown": function () {return this.classifyList.length>0},
	      "classList": [
	        "classify"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "二级分类"
	          },
	          "classList": [
	            "title"
	          ]
	        },
	        {
	          "type": "list",
	          "attr": {},
	          "classList": [
	            "classify-list"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.classifyList[this.parentIndex].children},
	                "key": "index",
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "children"
	                  },
	                  "classList": [
	                    "classify-item"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.clickChildren(this.index,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.name}
	                      },
	                      "classList": function () {return [this.childrenIndex===this.index?'active':'classify-text']}
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "refresh",
	      "attr": {
	        "refreshing": function () {return this.isRefreshing}
	      },
	      "events": {
	        "refresh": "refresh"
	      },
	      "children": [
	        {
	          "type": "list",
	          "attr": {},
	          "classList": [
	            "article-list"
	          ],
	          "events": {
	            "scrollbottom": "loadMoreData"
	          },
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.articleList},
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "article"
	                  },
	                  "classList": [
	                    "article-item"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.openArticle(this.$item.link,this.$item.projectLink,this.$item.title,evt)},
	                    "longpress": function (evt) {this.shareLink(this.$item.link,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "style": {
	                        "display": "flex"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "show": function () {return this.$item.fresh},
	                            "value": "新"
	                          },
	                          "classList": [
	                            "tag"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.title}
	                          },
	                          "classList": [
	                            "text-title"
	                          ],
	                          "style": {
	                            "flex": 1
	                          }
	                        },
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": function () {return this.collectIcon[this.$item.collect?1:0]}
	                          },
	                          "style": {
	                            "width": "52px",
	                            "height": "52px"
	                          },
	                          "events": {
	                            "click": function (evt) {this.clickCollect(this.$item,evt)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "article-tip"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '分类: ' + (this.$item.superChapterName) + '/' + (this.$item.chapterName)}
	                          },
	                          "classList": [
	                            "tip"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "article-tip"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '作者: ' + (this.$item.author)}
	                          },
	                          "classList": [
	                            "tip"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.niceDate}
	                          },
	                          "classList": [
	                            "time"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "loadMore"
	              },
	              "classList": [
	                "load-more"
	              ],
	              "children": [
	                {
	                  "type": "progress",
	                  "attr": {
	                    "type": "circular",
	                    "show": function () {return this.hasMoreData}
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "show": function () {return this.hasMoreData},
	                    "value": "加载更多"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "show": function () {return !this.hasMoreData},
	                    "value": "没有更多了~"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = {
	  ".classify-page": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".classify": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".classify .title": {
	    "width": "160px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".classify .classify-list": {
	    "display": "flex",
	    "flexDirection": "row",
	    "height": "60px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify-list"
	        }
	      ]
	    }
	  },
	  ".classify-item .classify-text": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "color": "#2e3135",
	    "backgroundColor": "#ffffff",
	    "borderRadius": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify-text"
	        }
	      ]
	    }
	  },
	  ".classify-item .active": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "color": "#ffffff",
	    "backgroundColor": "#24b9ff",
	    "borderRadius": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "classify-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".article-list": {
	    "flex": 1
	  },
	  ".article-item": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "flexDirection": "column",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".text-tip": {
	    "width": "100%",
	    "paddingTop": "20px",
	    "paddingRight": "10px",
	    "paddingBottom": "20px",
	    "paddingLeft": "10px",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".article-item .text-title": {
	    "fontSize": "30px",
	    "color": "#2e3135",
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "marginBottom": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text-title"
	        }
	      ]
	    }
	  },
	  ".article-item .article-tip": {
	    "display": "flex",
	    "flexDirection": "row",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        }
	      ]
	    }
	  },
	  ".article-tip .tip": {
	    "fontSize": "26px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tip"
	        }
	      ]
	    }
	  },
	  ".article-tip .time": {
	    "fontSize": "26px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "time"
	        }
	      ]
	    }
	  },
	  ".time": {
	    "flex": 1,
	    "textAlign": "right"
	  },
	  ".tag": {
	    "fontSize": "22px",
	    "color": "#FF0000",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderTopColor": "#FF0000",
	    "borderRightColor": "#FF0000",
	    "borderBottomColor": "#FF0000",
	    "borderLeftColor": "#FF0000",
	    "marginRight": "10px",
	    "paddingTop": "2px",
	    "paddingRight": "2px",
	    "paddingBottom": "2px",
	    "paddingLeft": "2px",
	    "height": "32px"
	  },
	  ".load-more": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classify = __webpack_require__(66);
	
	var _collect = __webpack_require__(8);
	
	exports.default = {
	  data: {
	    classifyList: [],
	    parentIndex: 0,
	    childrenIndex: 0,
	    articleList: [],
	    page: 0,
	    cid: '',
	    hasMoreData: true,
	    isRefreshing: false,
	    collectIcon: ['../Common/Image/icon_uncollect.png', '../Common/Image/icon_collect.png']
	  },
	  onInit: function onInit() {
	    this.getClassifyList();
	  },
	  getClassifyList: function getClassifyList() {
	    var _this = this;
	
	    (0, _classify.getClassifyList)().then(function (data) {
	      _this.classifyList = data;
	      _this.clickParent(0);
	    });
	  },
	  clickParent: function clickParent(index) {
	    this.parentIndex = index;
	    this.clickChildren(0);
	  },
	  clickChildren: function clickChildren(index) {
	    this.childrenIndex = index;
	    this.cid = this.classifyList[this.parentIndex].children[this.childrenIndex].id;
	    this.page = 0;
	    this.isRefreshing = true;
	    this.getArticle();
	  },
	  getArticle: function getArticle() {
	    var _this2 = this;
	
	    (0, _classify.getArticleByClassify)(this.page, this.cid).then(function (data) {
	      _this2.hasMoreData = !data.over;
	      if (_this2.page > 0) {
	        _this2.articleList = _this2.articleList.concat(data.datas);
	      } else {
	        _this2.isRefreshing = false;
	        _this2.articleList = data.datas;
	      }
	    }).catch(function (err) {
	      _this2.isRefreshing = false;
	    });
	  },
	  loadMoreData: function loadMoreData() {
	    if (this.hasMoreData) {
	      this.page++;
	      this.getArticle();
	    }
	  },
	  openArticle: function openArticle(link, projectLink, title) {
	    var url = projectLink === '' ? link : projectLink;
	    if (url !== '') {
	      this.$app.$def.router.push({
	        uri: 'Webview',
	        params: {
	          title: title,
	          url: url
	        }
	      });
	    }
	  },
	  refresh: function refresh(evt) {
	    this.isRefreshing = evt.refreshing;
	    this.page = 0;
	    this.getArticle();
	  },
	  clickCollect: function clickCollect(item) {
	    if (item.collect) {
	      this.uncollect(item.id);
	    } else {
	      this.collect(item.id);
	    }
	  },
	  uncollect: function uncollect(id) {
	    var _this3 = this;
	
	    (0, _collect.uncollectArticle)(id).then(function (data) {
	      _this3.refresh({ refreshing: true });
	      _this3.$app.$def.prompt.showToast({ message: '已取消收藏' });
	    }).catch(function (err) {
	      _this3.$app.$def.prompt.showToast({ message: '取消收藏失败' });
	    });
	  },
	  collect: function collect(id) {
	    var _this4 = this;
	
	    (0, _collect.collectArticle)(id).then(function (data) {
	      _this4.refresh({ refreshing: true });
	      _this4.$app.$def.prompt.showToast({ message: '收藏成功~' });
	    }).catch(function (err) {
	      _this4.$app.$def.prompt.showToast({ message: '收藏失败，登录之后才可收藏~' });
	    });
	  },
	  shareLink: function shareLink(url) {
	    this.$app.$def.share.share({
	      type: "text/plain",
	      data: url
	    });
	  }
	};}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getClassifyList = getClassifyList;
	exports.getArticleByClassify = getArticleByClassify;
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getClassifyList() {
	  return _index2.default.getClassifyList().then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}
	
	function getArticleByClassify() {
	  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var cid = arguments[1];
	
	  return _index2.default.getArticleByClassify(page, cid).then(function (response) {
	    return Promise.resolve(JSON.parse(response.data).data);
	  }).catch(function (err) {
	    return Promise.reject(err);
	  });
	}

/***/ },
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _kduser = __webpack_require__(39);
	
	exports.default = {
	    data: function data() {
	        return {
	            cunfu: '',
	            isLogin: false,
	            user: {}
	        };
	    },
	    onInit: function onInit() {
	        var param = { 'token': 'TK_tIXNIB_163_3' };
	        (0, _kduser.getUserInfo)(param).then(function (res) {}).catch(function (err) {
	            console.log("页面获取用户信息-- 是吧----->", JSON.stringify(err));
	        });
	    },
	    toLogin: function toLogin() {}
	};}

/***/ },
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(58)
	var $app_style$ = __webpack_require__(59)
	var $app_script$ = __webpack_require__(60)
	
	$app_define$('@app-component/home', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)
	__webpack_require__(80)
	__webpack_require__(84)
	var $app_template$ = __webpack_require__(88)
	var $app_style$ = __webpack_require__(89)
	var $app_script$ = __webpack_require__(90)
	
	$app_define$('@app-component/me', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(76)
	var $app_style$ = __webpack_require__(77)
	var $app_script$ = __webpack_require__(78)
	
	$app_define$('@app-component/login', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "login-page"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "请先登录"
	      },
	      "classList": [
	        "login-tip"
	      ]
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "用户名",
	        "clearable": "true",
	        "placeholder": "请输入用户名"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputUsername"
	      }
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "密码",
	        "clearable": "true",
	        "placeholder": "请输入密码",
	        "type": "password"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputPassword"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "登录"
	      },
	      "classList": [
	        "login-btn"
	      ],
	      "events": {
	        "click": "login"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "没有账号？去注册一个"
	      },
	      "classList": [
	        "register-text"
	      ],
	      "events": {
	        "click": "toRegister"
	      }
	    }
	  ]
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = {
	  ".login-page": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".login-tip": {
	    "width": "100%",
	    "height": "100px",
	    "textAlign": "center",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".input-border": {
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".login-btn": {
	    "height": "80px",
	    "width": "100%",
	    "textAlign": "center",
	    "marginTop": "50px",
	    "backgroundColor": "#24b9ff",
	    "color": "#ffffff"
	  },
	  ".register-text": {
	    "width": "100%",
	    "height": "50px",
	    "marginTop": "20px",
	    "fontSize": "22px",
	    "textAlign": "right",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  }
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(79);
	
	exports.default = {
	  data: function data() {
	    return {
	      username: '',
	      password: ''
	    };
	  },
	  toRegister: function toRegister() {
	    this.$dispatch('toview', { view: 'register' });
	  },
	  onInputUsername: function onInputUsername(_ref) {
	    var value = _ref.detail.value;
	
	    this.username = value;
	  },
	  onInputPassword: function onInputPassword(_ref2) {
	    var value = _ref2.detail.value;
	
	    this.password = value;
	  },
	  login: function login() {
	    var _this = this;
	
	    if (this.username === null || this.username.length < 6) {
	      this.$app.$def.prompt.showToast({ message: '用户名长度不能小于6' });
	    } else if (this.password === null || this.password.length < 6) {
	      this.$app.$def.prompt.showToast({ message: '密码长度不能小于6' });
	    } else {
	      (0, _user.login)(this.username, this.password).then(function (data) {
	        _this.$dispatch('success', { data: data });
	      }).catch(function (err) {
	        _this.$app.$def.prompt.showToast({ message: data });
	      });
	    }
	  }
	};}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.register = register;
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storage = $app_require$('@app-module/system.storage');
	
	function login(username, password) {
	  return _index2.default.login({
	    username: username,
	    password: password
	  }).then(function (response) {
	    var value = JSON.parse(response.data);
	    if (value.errorCode === -1) {
	      Promise.reject(value.errorMsg);
	    }
	    storage.set({
	      key: 'auth',
	      value: response.headers['Set-Cookie'],
	      success: function success(data) {
	        console.log('cookies保存成功');
	      }
	    });
	    storage.set({
	      key: 'user',
	      value: value.data
	    });
	    storage.set({
	      key: 'isLogin',
	      value: true
	    });
	    return Promise.resolve(value.data);
	  }).catch(function (err) {
	    return Promise.reject('登录失败');
	  });
	}
	
	function register(username, password, repassword) {
	  return _index2.default.register({
	    username: username,
	    password: password,
	    repassword: repassword
	  }).then(function (response) {
	    var value = JSON.parse(response.data);
	    if (value.errorCode === -1) {
	      Promise.reject(value.errorMsg);
	    }
	    storage.set({
	      key: 'auth',
	      value: response.headers['Set-Cookie'],
	      success: function success(data) {
	        console.log('cookies保存成功');
	      }
	    });
	    storage.set({
	      key: 'user',
	      value: value.data
	    });
	    storage.set({
	      key: 'isLogin',
	      value: true
	    });
	    return Promise.resolve(value.data);
	  }).catch(function (err) {
	    return Promise.reject('注册失败');
	  });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(81)
	var $app_style$ = __webpack_require__(82)
	var $app_script$ = __webpack_require__(83)
	
	$app_define$('@app-component/register', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "register-page"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "注册"
	      },
	      "classList": [
	        "register-tip"
	      ]
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "用户名",
	        "clearable": "true",
	        "placeholder": "请输入用户名"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputUsername"
	      }
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "密码",
	        "clearable": "true",
	        "placeholder": "请输入密码",
	        "type": "password"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputPassword"
	      }
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "密码",
	        "clearable": "true",
	        "placeholder": "请再次输入密码",
	        "type": "password"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputRePassword"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "注册"
	      },
	      "classList": [
	        "register-btn"
	      ],
	      "events": {
	        "click": "register"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "已有账号！去登录~"
	      },
	      "classList": [
	        "login-text"
	      ],
	      "events": {
	        "click": "toLogin"
	      }
	    }
	  ]
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  ".register-page": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".register-tip": {
	    "width": "100%",
	    "height": "100px",
	    "textAlign": "center",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".input-border": {
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".register-btn": {
	    "height": "80px",
	    "width": "100%",
	    "textAlign": "center",
	    "marginTop": "50px",
	    "backgroundColor": "#24b9ff",
	    "color": "#ffffff"
	  },
	  ".login-text": {
	    "width": "100%",
	    "height": "50px",
	    "marginTop": "20px",
	    "fontSize": "22px",
	    "textAlign": "right",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(79);
	
	exports.default = {
	  data: function data() {
	    return {
	      username: '',
	      password: '',
	      repassword: ''
	    };
	  },
	  toLogin: function toLogin() {
	    this.$dispatch('toview', { view: 'login' });
	  },
	  onInputUsername: function onInputUsername(_ref) {
	    var value = _ref.detail.value;
	
	    this.username = value;
	  },
	  onInputPassword: function onInputPassword(_ref2) {
	    var value = _ref2.detail.value;
	
	    this.password = value;
	  },
	  onInputRePassword: function onInputRePassword(_ref3) {
	    var value = _ref3.detail.value;
	
	    this.repassword = value;
	  },
	  register: function register() {
	    var _this = this;
	
	    if (this.username === null || this.username.length < 6) {
	      this.$app.$def.prompt.showToast({ message: '用户名长度不能小于6' });
	    } else if (this.password === null || this.password.length < 6) {
	      this.$app.$def.prompt.showToast({ message: '密码长度不能小于6' });
	    } else if (this.password !== this.repassword) {
	      this.$app.$def.prompt.showToast({ message: '两次密码不一样' });
	    } else {
	      (0, _user.register)(this.username, this.password, this.repassword).then(function (data) {
	        _this.$dispatch('success', { data: data });
	      }).catch(function (err) {
	        _this.$app.$def.prompt.showToast({ message: data });
	      });
	    }
	  }
	};}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(85)
	var $app_style$ = __webpack_require__(86)
	var $app_script$ = __webpack_require__(87)
	
	$app_define$('@app-component/c-dialog', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "stack",
	      "attr": {},
	      "shown": function () {return this.visible},
	      "classList": [
	        "dialog"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "backdrop"
	          ],
	          "style": {
	            "opacity": function () {return this.opacity}
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": function () {return ['dialog-container', this.dialogVisible?'fly-in':'fly-out']},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "dialog-title"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "dialog-body"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.message}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "dialog-btn"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-item"
	                  ],
	                  "repeat": {
	                    "exp": function () {return this.btnList},
	                    "key": "idx",
	                    "value": "btn"
	                  },
	                  "events": {
	                    "click": function (evt) {this.onClick(this.idx,evt)}
	                  },
	                  "style": {
	                    "borderLeftWidth": function () {return (this.idx===0?0:1) + 'px'}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.btn.label}
	                      },
	                      "style": {
	                        "color": function () {return this.btn.color?this.btn.color:'#909399'}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  ".dialog": {
	    "position": "fixed",
	    "height": "100%",
	    "width": "100%",
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".dialog-container": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "width": "450px",
	    "backgroundColor": "#ffffff",
	    "borderRadius": "10px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dcdfe6",
	    "borderRightColor": "#dcdfe6",
	    "borderBottomColor": "#dcdfe6",
	    "borderLeftColor": "#dcdfe6"
	  },
	  ".dialog-title": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#303133",
	    "paddingTop": "10px",
	    "paddingRight": "0px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px",
	    "width": "100%"
	  },
	  ".dialog-title > text": {
	    "fontSize": "35px",
	    "fontWeight": "bold",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "dialog-title"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".dialog-body": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#888888",
	    "fontSize": "30px",
	    "paddingTop": "20px",
	    "paddingRight": "15px",
	    "paddingBottom": "30px",
	    "paddingLeft": "15px",
	    "width": "100%"
	  },
	  ".dialog-btn": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": "100%",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dcdfe6",
	    "borderRightColor": "#dcdfe6",
	    "borderBottomColor": "#dcdfe6",
	    "borderLeftColor": "#dcdfe6",
	    "borderTopWidth": "1px"
	  },
	  ".btn-item": {
	    "flex": 1,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "100%",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".backdrop": {
	    "height": "100%",
	    "width": "100%",
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  },
	  ".fly-in": {
	    "animationName": "flyIn",
	    "animationDuration": "500ms",
	    "animationTimingFunction": "ease-out"
	  },
	  ".fly-out": {
	    "animationName": "flyOut",
	    "animationDuration": "500ms",
	    "animationTimingFunction": "ease-in"
	  },
	  "@KEYFRAMES": {
	    "flyIn": [
	      {
	        "opacity": 0,
	        "transform": "{\"translateY\":\"-3000px\"}",
	        "time": 0
	      },
	      {
	        "opacity": 1,
	        "transform": "{\"translateY\":\"1px\"}",
	        "time": 100
	      }
	    ],
	    "flyOut": [
	      {
	        "opacity": 1,
	        "transform": "{\"translateY\":\"1px\"}",
	        "time": 0
	      },
	      {
	        "opacity": 0,
	        "transform": "{\"translateY\":\"-3000px\"}",
	        "time": 100
	      }
	    ]
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['visible', 'title', 'message', 'btnList'],
	  propsDefault: {
	    visible: false,
	    title: '提示',
	    btnList: [{
	      label: 'OK',
	      color: '#909399'
	    }]
	  },
	  data: function data() {
	    return {
	      opacity: 0,
	      dialogVisible: false
	    };
	  },
	  onInit: function onInit() {
	    this.$watch('visible', 'showdialog');
	  },
	  showdialog: function showdialog() {
	    var _this = this;
	
	    if (this.visible) {
	      this.dialogVisible = true;
	      var id = setInterval(function () {
	        _this.opacity += 0.05;
	        if (_this.opacity > 1) {
	          _this.opacity = 1;
	          clearInterval(id);
	        }
	      }, 16);
	    } else {
	      this.onClose();
	    }
	  },
	  onClick: function onClick(idx) {
	    this.onClose();
	    this.$dispatch('click', { idx: idx });
	  },
	  onClose: function onClose() {
	    var _this2 = this;
	
	    var id = setInterval(function () {
	      _this2.dialogVisible = false;
	      _this2.opacity -= 0.05;
	      if (_this2.opacity <= 0) {
	        clearInterval(id);
	        _this2.opacity = 0;
	        _this2.$dispatch('close');
	      }
	    }, 16);
	  }
	};}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "me-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "me"
	      ],
	      "shown": function () {return this.isLogin},
	      "children": [
	        {
	          "type": "stack",
	          "attr": {},
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/Image/kdimg/home/background.png"
	              },
	              "classList": [
	                "avtar"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.loginData.username}
	              },
	              "classList": [
	                "username"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "收藏的文章"
	          },
	          "classList": [
	            "item",
	            "border-bottom"
	          ],
	          "events": {
	            "click": function (evt) {this.openView('CollectArticleList',evt)}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "收藏的网站"
	          },
	          "classList": [
	            "item"
	          ],
	          "events": {
	            "click": function (evt) {this.openView('CollectWebList',evt)}
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "创建桌面图标"
	          },
	          "classList": [
	            "item",
	            "border-bottom"
	          ],
	          "events": {
	            "click": "createShortcut"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "退出登录"
	          },
	          "classList": [
	            "item",
	            "border-bottom"
	          ],
	          "events": {
	            "click": "openDialog"
	          }
	        }
	      ]
	    },
	    {
	      "type": "login",
	      "attr": {},
	      "shown": function () {return (this.view==='login')&&!(this.isLogin)},
	      "events": {
	        "toview": "toView",
	        "success": "loginSuccess"
	      }
	    },
	    {
	      "type": "register",
	      "attr": {},
	      "shown": function () {return (this.view==='register')&&!(this.isLogin)&&!(this.view==='login')},
	      "events": {
	        "toview": "toView",
	        "success": "registerSuccess"
	      }
	    },
	    {
	      "type": "c-dialog",
	      "attr": {
	        "title": "提示",
	        "visible": function () {return this.showDialog},
	        "message": "确认退出登录？",
	        "btnList": function () {return this.dialogBtn}
	      },
	      "events": {
	        "close": "onClose",
	        "click": "onClick"
	      }
	    }
	  ]
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
	  ".me": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".header": {
	    "width": "100%",
	    "height": "400px"
	  },
	  ".avtar": {
	    "width": "100%",
	    "height": "100%"
	  },
	  ".username": {
	    "width": "100%",
	    "height": "100%",
	    "textAlign": "center",
	    "fontSize": "56px",
	    "color": "#ffffff",
	    "backgroundColor": "rgba(0,0,0,0.7)"
	  },
	  ".header-email": {
	    "height": "60px",
	    "color": "#999999"
	  },
	  ".item-title": {
	    "width": "100%",
	    "height": "30px",
	    "backgroundColor": "#dddddd",
	    "color": "#ffffff"
	  },
	  ".item": {
	    "width": "100%",
	    "paddingTop": "30px",
	    "paddingRight": "20px",
	    "paddingBottom": "30px",
	    "paddingLeft": "20px"
	  },
	  ".border-bottom": {
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  }
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      isLogin: false,
	      view: 'login',
	      loginData: {},
	      showDialog: false,
	      dialogBtn: [{
	        label: '退出'
	      }, {
	        label: '取消'
	      }]
	    };
	  },
	  onInit: function onInit() {
	    this.$app.$def.storage.get({
	      key: 'user',
	      success: function (data) {
	        this.loginData = {};
	        if (data != '') {
	          this.loginData = JSON.parse(data);
	        }
	      }.bind(this),
	      fail: function (data, code) {
	        this.loginData = {};
	      }.bind(this)
	    });
	    this.$app.$def.storage.get({
	      key: 'isLogin',
	      success: function (data) {
	        this.isLogin = data === 'true' ? true : false;
	      }.bind(this),
	      fail: function (data, code) {
	        this.isLogin = false;
	      }.bind(this)
	    });
	  },
	  toView: function toView(_ref) {
	    var view = _ref.detail.view;
	
	    this.view = view;
	  },
	  loginSuccess: function loginSuccess(_ref2) {
	    var data = _ref2.detail.data;
	
	    this.isLogin = true;
	    this.loginData = data;
	  },
	  registerSuccess: function registerSuccess(_ref3) {
	    var data = _ref3.detail.data;
	
	    this.isLogin = true;
	    this.loginData = data;
	  },
	  signout: function signout() {
	    this.isLogin = false;
	    this.view = 'login';
	    this.$app.$def.storage.delete({
	      key: 'auth'
	    });
	    this.$app.$def.storage.delete({
	      key: 'user'
	    });
	    this.$app.$def.storage.set({
	      key: 'isLogin',
	      value: 'false'
	    });
	  },
	  openDialog: function openDialog() {
	    this.showDialog = true;
	  },
	  onClose: function onClose() {
	    this.showDialog = false;
	  },
	  onClick: function onClick(_ref4) {
	    var idx = _ref4.detail.idx;
	
	    if (idx === 0) {
	      this.signout();
	    }
	  },
	  openView: function openView(uri) {
	    if (uri === 'about') {
	      return;
	    }
	    this.$app.$def.router.push({ uri: uri });
	  },
	  createShortcut: function createShortcut() {
	    this.$app.$def.createShortcut();
	  }
	};}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)
	var $app_template$ = __webpack_require__(41)
	var $app_style$ = __webpack_require__(42)
	var $app_script$ = __webpack_require__(68)
	
	$app_define$('@app-component/homepage', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "wanandroid-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "flexible-tabs"
	      ],
	      "children": [
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.currentIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "home",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[0].show}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "classify",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[1].show}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "me",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[2].show}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "homepage",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[3].show}
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flexible-tabbar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.tabItems},
	                "key": "index",
	                "value": "item"
	              },
	              "classList": [
	                "tab-item"
	              ],
	              "events": {
	                "click": function (evt) {this.clickTabBar(this.index,evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.item.icon[this.currentIndex===this.index?1:0]}
	                  },
	                  "classList": [
	                    "tab-icon"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.text}
	                  },
	                  "classList": function () {return [this.currentIndex===this.index?'active':'tab-text']}
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
	  ".wanandroid-page .flexible-tabs": {
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wanandroid-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        }
	      ]
	    }
	  },
	  ".flexible-tabs .flexible-tabbar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderTopColor": "#eeeeee",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .tab-item": {
	    "flex": 1,
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "display": "flex",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "fontSize": "12px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        }
	      ]
	    }
	  },
	  ".tab-item .tab-icon": {
	    "width": "56px",
	    "height": "56px",
	    "paddingTop": "5px",
	    "paddingRight": "5px",
	    "paddingBottom": "5px",
	    "paddingLeft": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-icon"
	        }
	      ]
	    }
	  },
	  ".tab-item .tab-text": {
	    "fontSize": "20px",
	    "color": "#aaaaaa",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-text"
	        }
	      ]
	    }
	  },
	  ".tab-item .active": {
	    "fontSize": "20px",
	    "color": "#24b9ff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      currentIndex: 0,
	      tabItems: [{
	        text: '首页',
	        icon: ['../Common/Image/icon_home.png', '../Common/Image/icon_home_select.png'],
	        show: true
	      }, {
	        text: '体系',
	        icon: ['../Common/Image/icon_classify.png', '../Common/Image/icon_classify_select.png'],
	        show: false
	      }, {
	        text: '我',
	        icon: ['../Common/Image/icon_me.png', '../Common/Image/icon_me_select.png'],
	        show: false
	      }, {
	        text: '蝌蚪',
	        icon: ['../Common/Image/icon_co.png', '../Common/Image/icon_co_select.png'],
	        show: false
	      }]
	    };
	  },
	  changeTabactive: function changeTabactive(evt) {
	    this.changeCurrent(evt.index);
	  },
	  clickTabBar: function clickTabBar(index) {
	    this.changeCurrent(index);
	  },
	  changeCurrent: function changeCurrent(index) {
	    this.$page.setTitleBar({ text: this.tabItems[index].text });
	    this.tabItems[index].show = true;
	    this.currentIndex = index;
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map