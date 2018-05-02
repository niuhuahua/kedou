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

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
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
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "add-article-page"
	  ],
	  "children": [
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "标题",
	        "clearable": "true",
	        "placeholder": "请输入标题"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputTitle"
	      }
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "作者",
	        "clearable": "true",
	        "placeholder": "请输入作者名称"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputAuthor"
	      }
	    },
	    {
	      "type": "c-input",
	      "attr": {
	        "label": "链接",
	        "clearable": "true",
	        "placeholder": "请输入文章链接"
	      },
	      "classList": [
	        "input-border"
	      ],
	      "events": {
	        "input": "onInputLink"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "添加收藏"
	      },
	      "classList": [
	        "add-btn"
	      ],
	      "events": {
	        "click": "add"
	      }
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  ".add-article-page": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".input-border": {
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#eeeeee"
	  },
	  ".add-btn": {
	    "height": "80px",
	    "width": "100%",
	    "textAlign": "center",
	    "marginTop": "50px",
	    "backgroundColor": "#24b9ff",
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _collect = __webpack_require__(8);
	
	exports.default = {
	  data: function data() {
	    return {
	      title: '',
	      link: '',
	      author: ''
	    };
	  },
	  onInputTitle: function onInputTitle(_ref) {
	    var value = _ref.detail.value;
	
	    this.title = value;
	  },
	  onInputAuthor: function onInputAuthor(_ref2) {
	    var value = _ref2.detail.value;
	
	    this.author = value;
	  },
	  onInputLink: function onInputLink(_ref3) {
	    var value = _ref3.detail.value;
	
	    this.link = value;
	  },
	  add: function add() {
	    var _this = this;
	
	    if (this.title.length <= 0) {
	      this.$app.$def.prompt.showToast({ message: '标题不能为空' });
	    } else if (this.author.length <= 0) {
	      this.$app.$def.prompt.showToast({ message: '作者名称不能为空' });
	    } else if (this.link.length <= 0) {
	      this.$app.$def.prompt.showToast({ message: '链接不能为空' });
	    } else {
	      (0, _collect.collectArticleAdd)(this.title, this.author, this.link).then(function (data) {
	        _this.$app.$data.dataAddArticle = {
	          gotoPage: 'collectArticleList',
	          params: {
	            success: true
	          }
	        };
	        _this.$app.$def.prompt.showToast({ message: '收藏成功~' });
	        _this.$app.$def.router.back();
	      }).catch(function (err) {
	        _this.$app.$def.prompt.showToast({ message: data });
	      });
	    }
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

/***/ },
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