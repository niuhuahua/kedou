(function(){
      
  var createAppHandler = function() {
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(97)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(98);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _system = $app_require$('@app-module/system.clipboard');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.router');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.storage');
	
	var _system8 = _interopRequireDefault(_system7);
	
	var _system9 = $app_require$('@app-module/system.share');
	
	var _system10 = _interopRequireDefault(_system9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  clipboard: _system2.default,
	  prompt: _system4.default,
	  router: _system6.default,
	  storage: _system8.default,
	  share: _system10.default,
	  createShortcut: _util2.default.createShortcut
	};
	(exports.default || module.exports).manifest = {"package":"cn.codebear.wanandroid","name":"wanandroid","versionName":"1.0.2","versionCode":"3","minPlatformVersion":"101","icon":"/Common/Image/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.storage"},{"name":"system.clipboard"},{"name":"system.share"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"KdBottom","pages":{"Wanandroid":{"component":"index"},"Webview":{"component":"index"},"CollectArticleList":{"component":"index"},"AddCollectArticle":{"component":"index"},"CollectWebList":{"component":"index"},"AddCollectWeb":{"component":"index"},"Home":{"component":"kdIndex"},"KdBottom":{"component":"index"},"Login":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#24b9ff","titleBarTextColor":"#ffffff","titleBarText":"首页","pages":{"CollectArticleList":{"titleBar":false},"Home":{"titleBar":false},"AddCollectArticle":{"titleBarText":"收藏站外文章"},"CollectWebList":{"titleBar":false},"AddCollectWeb":{"titleBarText":"收藏网站"}}}};
	}

/***/ },

/***/ 98:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	exports.default = {
	  createShortcut: createShortcut
	};

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"cn.codebear.wanandroid","name":"wanandroid","versionName":"1.0.2","versionCode":"3","minPlatformVersion":"101","icon":"/Common/Image/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.storage"},{"name":"system.clipboard"},{"name":"system.share"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"KdBottom","pages":{"Wanandroid":{"component":"index"},"Webview":{"component":"index"},"CollectArticleList":{"component":"index"},"AddCollectArticle":{"component":"index"},"CollectWebList":{"component":"index"},"AddCollectWeb":{"component":"index"},"Home":{"component":"kdIndex"},"KdBottom":{"component":"index"},"Login":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#24b9ff","titleBarTextColor":"#ffffff","titleBarText":"首页","pages":{"CollectArticleList":{"titleBar":false},"Home":{"titleBar":false},"AddCollectArticle":{"titleBarText":"收藏站外文章"},"CollectWebList":{"titleBar":false},"AddCollectWeb":{"titleBarText":"收藏网站"}}}};
  }
})();
//# sourceMappingURL=app.js.map