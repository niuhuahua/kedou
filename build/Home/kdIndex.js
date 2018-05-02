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

	__webpack_require__(27)
	var $app_template$ = __webpack_require__(41)
	var $app_style$ = __webpack_require__(42)
	var $app_script$ = __webpack_require__(43)
	
	$app_define$('@app-component/kdIndex', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/kdIndex',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
//# sourceMappingURL=kdIndex.js.map