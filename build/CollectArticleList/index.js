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

	__webpack_require__(13)
	var $app_template$ = __webpack_require__(17)
	var $app_style$ = __webpack_require__(18)
	var $app_script$ = __webpack_require__(19)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(14)
	var $app_style$ = __webpack_require__(15)
	var $app_script$ = __webpack_require__(16)
	
	$app_define$('@app-component/c-title', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "c-title"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "/Common/Image/icon_back.png"
	      },
	      "classList": [
	        "icon"
	      ],
	      "shown": function () {return this.showBack},
	      "events": {
	        "click": "onBackClick"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      },
	      "classList": [
	        "title"
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.rightIcon}
	      },
	      "classList": [
	        "icon"
	      ],
	      "shown": function () {return this.rightIcon!==''},
	      "events": {
	        "click": "onRightIconClick"
	      }
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  ".c-title": {
	    "display": "flex",
	    "height": "100px",
	    "alignItems": "center",
	    "backgroundColor": "#24b9ff"
	  },
	  ".title": {
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "flex": 1,
	    "fontSize": "36px",
	    "color": "#ffffff",
	    "marginLeft": "20px"
	  },
	  ".icon": {
	    "width": "100px",
	    "height": "100px",
	    "paddingTop": "26px",
	    "paddingRight": "26px",
	    "paddingBottom": "26px",
	    "paddingLeft": "26px"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['showBack', 'title', 'rightIcon'],
	  propsDefault: {
	    showBack: true,
	    title: '',
	    rightIcon: ''
	  },
	  onBackClick: function onBackClick() {
	    this.$dispatch('iconclick', { icon: 'back' });
	    this.$app.$def.router.back();
	  },
	  onRightIconClick: function onRightIconClick() {
	    this.$dispatch('iconclick', { icon: 'right' });
	  }
	};}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "style": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "c-title",
	      "attr": {
	        "showBack": "true",
	        ",": "",
	        "title": "收藏的文章",
	        "rightIcon": "/Common/Image/icon_add.png"
	      },
	      "events": {
	        "iconclick": "onTitleIconClick"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "长按可分享文章~"
	      },
	      "classList": [
	        "click-tip"
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
	            "home-page"
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
	                    "click": function (evt) {this.openArticle(this.$item.link,this.$item.title,evt)},
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
	                            "src": "../Common/Image/icon_collect.png"
	                          },
	                          "style": {
	                            "width": "52px",
	                            "height": "52px"
	                          },
	                          "events": {
	                            "click": function (evt) {this.uncollect(this.$item.id,this.$item.originId,evt)}
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
	                      "shown": function () {return this.$item.chapterName!==''},
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '分类: ' + (this.$item.chapterName)}
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
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
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
	  ".load-more": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  ".click-tip": {
	    "width": "100%",
	    "textAlign": "center",
	    "backgroundColor": "#eeeeee",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _collect = __webpack_require__(8);
	
	exports.default = {
	  data: {
	    articleList: [],
	    page: 0,
	    hasMoreData: true,
	    isRefreshing: false
	  },
	  onInit: function onInit() {
	    this.refresh({ refreshing: true });
	  },
	  onShow: function onShow() {
	    if (this.$app.$data.dataAddArticle && this.$app.$data.dataAddArticle.gotoPage === 'collectArticleList') {
	      var data = this.$app.$data.dataAddArticle.params;
	      if (data.success) {
	        this.refresh({ refreshing: true });
	      }
	    }
	  },
	  getCollectArticle: function getCollectArticle() {
	    var _this = this;
	
	    (0, _collect.getCollectArticle)(this.page).then(function (data) {
	      _this.hasMoreData = !data.over;
	      if (_this.page > 0) {
	        _this.articleList = _this.articleList.concat(data.datas);
	      } else {
	        _this.isRefreshing = false;
	        _this.articleList = data.datas;
	      }
	    }).catch(function (err) {
	      _this.isRefreshing = false;
	    });
	  },
	  loadMoreData: function loadMoreData() {
	    if (this.hasMoreData) {
	      this.page++;
	      this.getCollectArticle();
	    }
	  },
	  openArticle: function openArticle(link, title) {
	    if (link !== '') {
	      this.$app.$def.router.push({
	        uri: 'Webview',
	        params: {
	          title: title,
	          url: link
	        }
	      });
	    }
	  },
	  refresh: function refresh(evt) {
	    this.isRefreshing = evt.refreshing;
	    this.page = 0;
	    this.getCollectArticle();
	  },
	  uncollect: function uncollect(id, originId) {
	    var _this2 = this;
	
	    (0, _collect.uncollect)(id, originId).then(function (data) {
	      _this2.refresh({ refreshing: true });
	      _this2.$app.$def.prompt.showToast({ message: '已取消收藏' });
	    }).catch(function (err) {
	      _this2.$app.$def.prompt.showToast({ message: '取消收藏失败' });
	    });
	  },
	  onTitleIconClick: function onTitleIconClick(_ref) {
	    var icon = _ref.detail.icon;
	
	    if (icon === 'right') {
	      this.$app.$def.router.push({
	        uri: 'AddCollectArticle'
	      });
	    }
	  },
	  shareLink: function shareLink(url) {
	    this.$app.$def.share.share({
	      type: "text/plain",
	      data: url
	    });
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