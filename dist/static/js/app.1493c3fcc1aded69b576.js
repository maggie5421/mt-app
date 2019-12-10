webpackJsonp([1],{

/***/ "/Wgr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "09yM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6Ufb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CuRo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "H6Vc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JC7b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MJbH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vue@2.6.10@vue/dist/vue.esm.js
var vue_esm = __webpack_require__("xd7I");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-9b74431c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("VotE")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@3.1.3@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("7LQH");

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js
var promise = __webpack_require__("rVsN");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("4YfN");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_axios@0.18.1@axios/index.js
var _axios_0_18_1_axios = __webpack_require__("84iU");
var _axios_0_18_1_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axios);

// CONCATENATED MODULE: ./src/axios.js



_axios_0_18_1_axios_default.a.defaults.baseURL = 'https://open.duyiedu.com';
_axios_0_18_1_axios_default.a.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config);
  config.params = extends_default()({}, config.params, {
    appkey: 'DuYimeiqi_1564986205860'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return promise_default.a.reject(error);
});

/* harmony default export */ var axios = (_axios_0_18_1_axios_default.a);
// CONCATENATED MODULE: ./src/api/index.js



var api = {
  searchHotWords: function searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params);
  },
  getSearchList: function getSearchList() {
    return axios.get('/api/meituan/header/search.json');
  },
  getMenuList: function getMenuList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  resultsByKeywords: function resultsByKeywords() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getProductsList: function getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getHotCity: function getHotCity() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getRecentCity: function getRecentCity() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getProvinceList: function getProvinceList() {
    return axios.get('/api/meituan/city/province.json');
  },
  getCurPosition: function getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json');
  },
  getCityList: function getCityList() {
    return axios.get('/api/meituan/city/cityList.json');
  },
  login: function login(params) {
    return axios.get('/api/meituan/login', params);
  },
  register: function register(params) {
    return axios.get('/api/meituan/register', params);
  }
};

/* harmony default export */ var src_api = (api);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/header/geo.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var geo = ({
    data: function data() {
        return {
            nearCity: []
        };
    },

    watch: {
        "$store.state.position": function $storeStatePosition() {
            this.nearCity = this.$store.state.position.nearCity;
        }
    },
    created: function created() {
        var _this = this;

        src_api.getCurPosition().then(function (res) {
            _this.$store.dispatch('setPosition', res.data.data);
            _this.nearCity = res.data.data.nearCity;
        });
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-eecc99cc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/header/geo.vue
var geo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-geo"},[_c('div',{staticClass:"position"},[_c('i',{staticClass:"el-icon-location"}),_vm._v("\n        "+_vm._s(_vm.$store.state.position.name)+"\n        "),_c('router-link',{staticClass:"changeCity",attrs:{"to":{name: 'changeCity'}}},[_vm._v("切换城市")]),_vm._v("\n        [\n            "),_vm._l((_vm.nearCity),function(item,index){return _c('a',{key:index,attrs:{"href":"#"}},[_vm._v(" "+_vm._s(item.name)+" ")])}),_vm._v("\n        ]\n    ")],2),_vm._v(" "),(!_vm.$store.state.userName)?_c('div',{staticClass:"m-user"},[_c('router-link',{staticClass:"login",attrs:{"to":{name: 'login'}}},[_vm._v("立即登录")]),_vm._v(" "),_c('router-link',{staticClass:"register",attrs:{"to":{name: 'register'}}},[_vm._v("注册")])],1):_vm._e()])}
var geo_staticRenderFns = []
var geo_esExports = { render: geo_render, staticRenderFns: geo_staticRenderFns }
/* harmony default export */ var header_geo = (geo_esExports);
// CONCATENATED MODULE: ./src/components/header/geo.vue
var geo_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var geo___vue_template_functional__ = false
/* styles */
var geo___vue_styles__ = null
/* scopeId */
var geo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var geo___vue_module_identifier__ = null
var geo_Component = geo_normalizeComponent(
  geo,
  header_geo,
  geo___vue_template_functional__,
  geo___vue_styles__,
  geo___vue_scopeId__,
  geo___vue_module_identifier__
)

/* harmony default export */ var components_header_geo = (geo_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/header/nav.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var nav = ({});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-34f6243c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/header/nav.vue
var nav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-nav"},[_c('ul',{staticClass:"nav"},[_c('li',{staticClass:"list my"},[_c('router-link',{attrs:{"to":{name: 'my'}}},[_vm._v("我的美团")]),_vm._v(" "),_c('dl',[_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的订单")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的收藏")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("抵用券")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("账户设置")])],1)])],1),_vm._v(" "),_c('li',{staticClass:"list"},[_c('router-link',{attrs:{"to":{name: 'my'}}},[_vm._v("手机APP")])],1),_vm._v(" "),_c('li',{staticClass:"list bd"},[_c('router-link',{attrs:{"to":{name: 'my'}}},[_vm._v("商家中心")]),_vm._v(" "),_c('dl',[_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("登录商家中心")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("美团智能收银")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我想合作")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("账户设置")])],1)])],1),_vm._v(" "),_c('li',{staticClass:"list site"},[_c('router-link',{attrs:{"to":{name: 'my'}}},[_vm._v("网站导航")]),_vm._v(" "),_c('div',{staticClass:"subContainer"},[_c('dl',{staticClass:"hotel"},[_c('dt',[_vm._v("酒店旅游")]),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的订单")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的收藏")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("抵用券")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("账户设置")])],1)]),_vm._v(" "),_c('dl',{staticClass:"food"},[_c('dt',[_vm._v("吃美食")]),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的订单")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的收藏")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("抵用券")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("账户设置")])],1)]),_vm._v(" "),_c('dl',{staticClass:"movie"},[_c('dt',[_vm._v("看电影")]),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的订单")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("我的收藏")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("抵用券")])],1),_vm._v(" "),_c('dd',[_c('router-link',{attrs:{"to":{path: '/'}}},[_vm._v("账户设置")])],1)]),_vm._v(" "),_vm._m(0)])],1)])])}
var nav_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"app"},[_c('dt',[_vm._v("手机应用")]),_vm._v(" "),_c('dd',[_c('img',{staticClass:"appicon",attrs:{"src":"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png","title":"美团app","alt":"美团app"}})])])}]
var nav_esExports = { render: nav_render, staticRenderFns: nav_staticRenderFns }
/* harmony default export */ var header_nav = (nav_esExports);
// CONCATENATED MODULE: ./src/components/header/nav.vue
var nav_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var nav___vue_template_functional__ = false
/* styles */
var nav___vue_styles__ = null
/* scopeId */
var nav___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var nav___vue_module_identifier__ = null
var nav_Component = nav_normalizeComponent(
  nav,
  header_nav,
  nav___vue_template_functional__,
  nav___vue_styles__,
  nav___vue_scopeId__,
  nav___vue_module_identifier__
)

/* harmony default export */ var components_header_nav = (nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/header/topBar.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var topBar = ({
    components: {
        geo: components_header_geo,
        MNav: components_header_nav
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-64696c71","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/header/topBar.vue
var topBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"m-header-topbar m-header"},[_c('el-col',{attrs:{"span":10}},[_c('geo')],1),_vm._v(" "),_c('el-col',{attrs:{"span":14}},[_c('m-nav')],1)],1)}
var topBar_staticRenderFns = []
var topBar_esExports = { render: topBar_render, staticRenderFns: topBar_staticRenderFns }
/* harmony default export */ var header_topBar = (topBar_esExports);
// CONCATENATED MODULE: ./src/components/header/topBar.vue
function topBar_injectStyle (ssrContext) {
  __webpack_require__("NyR4")
}
var topBar_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var topBar___vue_template_functional__ = false
/* styles */
var topBar___vue_styles__ = topBar_injectStyle
/* scopeId */
var topBar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var topBar___vue_module_identifier__ = null
var topBar_Component = topBar_normalizeComponent(
  topBar,
  header_topBar,
  topBar___vue_template_functional__,
  topBar___vue_styles__,
  topBar___vue_scopeId__,
  topBar___vue_module_identifier__
)

/* harmony default export */ var components_header_topBar = (topBar_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/header/searchBar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var searchBar = ({
    data: function data() {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: [],
            searchList: [],
            suggestList: []
        };
    },
    created: function created() {
        var _this = this;

        src_api.searchHotWords().then(function (res) {
            console.log(res);
            _this.hotPlaceList = res.data.data;
            _this.suggestList = res.data.data;
        });
    },

    computed: {
        isHotPlace: function isHotPlace() {
            return !this.searchWord && this.isFocus;
        },
        isSearchList: function isSearchList() {
            return this.searchWord && this.isFocus;
        }
    },
    watch: {
        "$route.params.name": function $routeParamsName() {
            this.searchWord = this.$route.params.name;
        }
    },
    methods: {
        focusInput: function focusInput() {
            this.isFocus = true;
        },
        blurInput: function blurInput() {
            var self = this;
            setTimeout(function () {
                self.isFocus = false;
            }, 200);
        },
        input: function input() {
            var _this2 = this;

            var val = this.searchWord;
            src_api.getSearchList().then(function (res) {
                _this2.searchList = res.data.data.list.filter(function (item, index) {
                    return item.indexOf(val) > -1;
                });
            });
        }
    },
    mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-6ead718f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/header/searchBar.vue
var searchBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-panel"},[_c('el-row',{staticClass:"m-header-searchbar"},[_c('el-col',{staticClass:"left",attrs:{"span":3}},[_c('img',{attrs:{"src":"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png","alt":"美团"}})]),_vm._v(" "),_c('el-col',{staticClass:"center",attrs:{"span":15}},[_c('div',{staticClass:"wrapper"},[_c('el-input',{attrs:{"placeholder":"搜索商家或地点"},on:{"focus":_vm.focusInput,"blur":_vm.blurInput,"input":_vm.input},model:{value:(_vm.searchWord),callback:function ($$v) {_vm.searchWord=$$v},expression:"searchWord"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"}}),_vm._v(" "),(_vm.isHotPlace)?_c('dl',{staticClass:"hotPlace"},[_c('dt',[_vm._v("热门搜索")]),_vm._v(" "),_vm._l((_vm.hotPlaceList),function(item,index){return _c('dd',{key:item + '_'+ index},[_c('router-link',{attrs:{"to":{name: 'goods', params: {name: item}}}},[_vm._v(_vm._s(item))])],1)})],2):_vm._e(),_vm._v(" "),(_vm.isSearchList)?_c('dl',{staticClass:"searchList"},_vm._l((_vm.searchList),function(item,index){return _c('dd',{key:index},[_c('router-link',{attrs:{"to":{name: 'goods', params: {name: item}}}},[_vm._v(_vm._s(item))])],1)}),0):_vm._e()],1),_vm._v(" "),_c('p',{staticClass:"suggest"},_vm._l((_vm.suggestList),function(item,index){return _c('router-link',{key:item + '~' + index,attrs:{"to":{name: 'goods', params: {name: item}}}},[_vm._v(_vm._s(item))])}),1)])],1)],1)}
var searchBar_staticRenderFns = []
var searchBar_esExports = { render: searchBar_render, staticRenderFns: searchBar_staticRenderFns }
/* harmony default export */ var header_searchBar = (searchBar_esExports);
// CONCATENATED MODULE: ./src/components/header/searchBar.vue
function searchBar_injectStyle (ssrContext) {
  __webpack_require__("rxFh")
}
var searchBar_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var searchBar___vue_template_functional__ = false
/* styles */
var searchBar___vue_styles__ = searchBar_injectStyle
/* scopeId */
var searchBar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var searchBar___vue_module_identifier__ = null
var searchBar_Component = searchBar_normalizeComponent(
  searchBar,
  header_searchBar,
  searchBar___vue_template_functional__,
  searchBar___vue_styles__,
  searchBar___vue_scopeId__,
  searchBar___vue_module_identifier__
)

/* harmony default export */ var components_header_searchBar = (searchBar_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/header/index.vue
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var header = ({
    components: {
        topBar: components_header_topBar,
        searchBar: components_header_searchBar
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-58cd8f3f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/header/index.vue
var header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-header"},[_c('el-row',[_c('top-bar')],1),_vm._v(" "),_c('el-row',[_c('search-bar')],1)],1)}
var header_staticRenderFns = []
var header_esExports = { render: header_render, staticRenderFns: header_staticRenderFns }
/* harmony default export */ var components_header = (header_esExports);
// CONCATENATED MODULE: ./src/components/header/index.vue
function header_injectStyle (ssrContext) {
  __webpack_require__("U2ac")
}
var header_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var header___vue_template_functional__ = false
/* styles */
var header___vue_styles__ = header_injectStyle
/* scopeId */
var header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var header___vue_module_identifier__ = null
var header_Component = header_normalizeComponent(
  header,
  components_header,
  header___vue_template_functional__,
  header___vue_styles__,
  header___vue_scopeId__,
  header___vue_module_identifier__
)

/* harmony default export */ var src_components_header = (header_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/footer/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var footer = ({});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7863f350","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/footer/index.vue
var footer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var footer_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"com-footer"},[_c('div',{staticClass:"footer-content"},[_c('div',{staticClass:"footer-link clearfix"},[_c('div',{staticClass:"footer-column"},[_c('dl',[_c('dt',[_vm._v("用户帮助")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/help/selfservice","target":"_blank"}},[_vm._v("申请退款")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/help/selfservice?tab=2","target":"_blank"}},[_vm._v("查看美团券密码")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/help/faq","target":"_blank"}},[_vm._v("常见问题")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/terms","target":"_blank"}},[_vm._v("用户协议")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/privacy","target":"_blank"}},[_vm._v("隐私政策")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/anticheat","target":"_blank"}},[_vm._v("反诈骗公告")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("美团服务")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://waimai.meituan.com/","target":"_blank"}},[_vm._v("美团外卖")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://hotel.meituan.com/","target":"_blank"}},[_vm._v("美团酒店")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://maoyan.com/","target":"_blank"}},[_vm._v("猫眼电影")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://peisong.meituan.com/","target":"_blank"}},[_vm._v("美团配送")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://www.mtyun.com/","target":"_blank"}},[_vm._v("美团云")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://www.dianping.com/","target":"_blank"}},[_vm._v("大众点评")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://phoenix.meituan.com/","target":"_blank"}},[_vm._v("榛果民宿")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://mad.meituan.com","target":"_blank"}},[_vm._v("无人配送")])])])]),_vm._v(" "),_c('div',{staticClass:"footer-column"},[_c('dl',[_c('dt',[_vm._v("商家合作")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my","target":"_blank"}},[_vm._v("美食商家入驻(非外卖)")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://kd.meituan.com/","target":"_blank"}},[_vm._v("美团外卖开店申请")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://shouyin.meituan.com?utm_source=inner&utm_medium=mtpc","target":"_blank"}},[_vm._v("美团收银官网")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://page.peisong.meituan.com/apply/join","target":"_blank"}},[_vm._v("外卖配送加盟申请")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"https://xue.meituan.com/?from=mtpc","target":"_blank"}},[_vm._v("美团点评餐饮学院")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://ruzhu.meituan.com/ruzhu/index.html","target":"_blank"}},[_vm._v("酒店商家入驻")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://i.meituan.com/awp/h5/trip/business/cooperation/index.html?client=pc","target":"_blank"}},[_vm._v("境内度假商家入驻")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://e.dianping.com/claimcpc/page/index?source=mt","target":"_blank"}},[_vm._v("综合商家入驻")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://phoenix.meituan.com/about/","target":"_blank"}},[_vm._v("榛果民宿房东商家入驻")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"href":"http://pc.meituan.com/?activity_code=mtpcdb","target":"_blank"}},[_vm._v("商家开票申请")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001","target":"_blank"}},[_vm._v("美团点评智能收银机")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://developer.meituan.com/","target":"_blank"}},[_vm._v("聚宝盆餐饮开放平台")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://smartpay.meituan.com/","target":"_blank"}},[_vm._v("美团智能支付")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://paidui.meituan.com/?activity_code=167_00038050","target":"_blank"}},[_vm._v("免费使用美团排队")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html","target":"_blank"}},[_vm._v("快驴进货商家合作")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://shangou.meituan.com/joinin","target":"_blank"}},[_vm._v("美团闪购商家入驻")])])])]),_vm._v(" "),_c('div',{staticClass:"footer-column"},[_c('dl',[_c('dt',[_vm._v("代理商加盟")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://i.meituan.com/awp/hfe/block/4544/index.html","target":"_blank"}},[_vm._v("智能支付渠道加盟商招募")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd","target":"_blank"}},[_vm._v("到店餐饮代理商招募")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.dianping.com/apollo/agent/index?source=mtpcd","target":"_blank"}},[_vm._v("非餐饮代理商招募")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://union.meituan.com/","target":"_blank"}},[_vm._v("美团联盟")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://store.meituan.com/distribution/broadcast","target":"_blank"}},[_vm._v("美团收银招募线上分销商")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://agent.meituan.com/zhaoshang?entry=5","target":"_blank"}},[_vm._v("美团点评5S服务商招募")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("行业规范")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/saferule","target":"_blank"}},[_vm._v("美团点评餐饮安全管理办法")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("廉正举报")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"mailto:lianzheng@meituan.com","target":"_self"}},[_vm._v("廉政邮箱")])])])]),_vm._v(" "),_c('div',{staticClass:"footer-column"},[_c('dl',[_c('dt',[_vm._v("关注美团")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://weibo.com/meituan","target":"_blank"}},[_vm._v("美团新浪微博")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("公司信息")]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://about.meituan.com/","target":"_blank"}},[_vm._v("关于我们")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://about.meituan.com/investor.html","target":"_blank"}},[_vm._v("投资者关系")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://zhaopin.meituan.com/","target":"_blank"}},[_vm._v("加入我们")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/law","target":"_blank"}},[_vm._v("法律声明")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"http://www.meituan.com/about/bizlicense","target":"_blank"}},[_vm._v("商户服务协议")])]),_vm._v(" "),_c('dd',[_c('a',{attrs:{"rel":"nofollow","href":"https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC","target":"_blank"}},[_vm._v("商户诚信公约及管理办法")])])])]),_vm._v(" "),_c('div',{staticClass:"footer-column"},[_c('dl',[_c('dt',[_vm._v("消费者服务热线")]),_vm._v(" "),_c('dd',[_vm._v("外卖消费者：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:10109777","target":"_blank"}},[_vm._v("10109777")])]),_vm._v(" "),_c('dd',[_vm._v("猫眼消费者：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:10105335","target":"_blank"}},[_vm._v("10105335")])]),_vm._v(" "),_c('dd',[_vm._v("其他消费者：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:10107888","target":"_blank"}},[_vm._v("10107888")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("商家服务热线")]),_vm._v(" "),_c('dd',[_vm._v("外卖&餐饮商家：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:10105557","target":"_blank"}},[_vm._v("10105557")])]),_vm._v(" "),_c('dd',[_vm._v("休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:10100107","target":"_blank"}},[_vm._v("10100107")])])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("投诉举报热线")]),_vm._v(" "),_c('dd',[_vm._v("违法和不良信息举报电话：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"tel:4006018900","target":"_blank"}},[_vm._v("4006018900")])]),_vm._v(" "),_c('dd',[_vm._v("举报邮箱：\n            "),_c('a',{attrs:{"rel":"nofollow","href":"mailto:tousujubao@meituan.com","target":"_self"}},[_vm._v("tousujubao@meituan.com")])])]),_vm._v(" "),_c('dl',[_c('dt',[_c('a',{attrs:{"rel":"nofollow","href":"https://ecom.meituan.com/bizsettle/settle/merchantsSettle","target":"_blank"}},[_vm._v("商家自助入驻美团入口")])])])])]),_vm._v(" "),_c('div',{staticClass:"footer-copyright clearfix"},[_c('div',{staticClass:"footer-copyright-left"},[_c('p',[_vm._v("©美团网团购 meituan.com\n          "),_c('a',{attrs:{"href":"http://www.beianbeian.com/beianxinxi/283f39a9-4c00-427a-97ef-3c7a9e1e0af1.html"}},[_vm._v("京ICP证070791号")]),_vm._v(" "),_c('a',{attrs:{"href":"http://www.miitbeian.gov.cn/"}},[_vm._v("京ICP备10211739号")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.meituan.com/about/rules","target":"_blank"}},[_vm._v("电子公告服务规则")])]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"https://i.meituan.com/brunch/default/right","target":"_blank"}},[_vm._v("广播电视节目制作经营许可证（京）字第03889号")])])]),_vm._v(" "),_c('div',{staticClass:"footer-copyright-right"},[_c('a',{attrs:{"href":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545","target":"_blank"}},[_vm._v("京公网安备11010502025545号")]),_vm._v(" "),_c('div',{staticClass:"footer-copyright-cert"},[_c('a',{staticClass:"sp-ft sp-ft--record",attrs:{"href":"https://www.meituan.com/about/openinfo","title":"备案信息","target":"_blank"}},[_vm._v("备案信息")]),_vm._v(" "),_c('a',{staticClass:"sp-ft sp-ft--knet",attrs:{"href":"http://t.knet.cn/index_new.jsp","title":"可信网站认证","target":"_blank"}},[_vm._v("可信网站")]),_vm._v(" "),_c('a',{staticClass:"sp-ft sp-ft--12315",attrs:{"href":"http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq","title":"12315消费争议","target":"_blank"}},[_vm._v("12315消费争议")])])])])])])}]
var footer_esExports = { render: footer_render, staticRenderFns: footer_staticRenderFns }
/* harmony default export */ var components_footer = (footer_esExports);
// CONCATENATED MODULE: ./src/components/footer/index.vue
function footer_injectStyle (ssrContext) {
  __webpack_require__("H6Vc")
}
var footer_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var footer___vue_template_functional__ = false
/* styles */
var footer___vue_styles__ = footer_injectStyle
/* scopeId */
var footer___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var footer___vue_module_identifier__ = null
var footer_Component = footer_normalizeComponent(
  footer,
  components_footer,
  footer___vue_template_functional__,
  footer___vue_styles__,
  footer___vue_scopeId__,
  footer___vue_module_identifier__
)

/* harmony default export */ var src_components_footer = (footer_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/layout/default.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var layout_default = ({
    components: {
        myHeader: src_components_header,
        myFooter: src_components_footer
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-a714c27e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/layout/default.vue
var default_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{staticClass:"layout-default"},[_c('el-header',{attrs:{"height":""}},[_c('my-header')],1),_vm._v(" "),_c('el-main',[_c('router-view')],1),_vm._v(" "),_c('el-footer',{attrs:{"height":""}},[_c('my-footer')],1)],1)}
var default_staticRenderFns = []
var default_esExports = { render: default_render, staticRenderFns: default_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_layout_default = (default_esExports);
// CONCATENATED MODULE: ./src/layout/default.vue
function default_injectStyle (ssrContext) {
  __webpack_require__("fnLZ")
}
var default_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var default___vue_template_functional__ = false
/* styles */
var default___vue_styles__ = default_injectStyle
/* scopeId */
var default___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var default___vue_module_identifier__ = null
var default_Component = default_normalizeComponent(
  layout_default,
  selectortype_template_index_0_src_layout_default,
  default___vue_template_functional__,
  default___vue_styles__,
  default___vue_scopeId__,
  default___vue_module_identifier__
)

/* harmony default export */ var src_layout_default = (default_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/layout/blank.vue
//
//
//
//
//

/* harmony default export */ var blank = ({});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-723bb11b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/layout/blank.vue
var blank_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('router-view')],1)}
var blank_staticRenderFns = []
var blank_esExports = { render: blank_render, staticRenderFns: blank_staticRenderFns }
/* harmony default export */ var layout_blank = (blank_esExports);
// CONCATENATED MODULE: ./src/layout/blank.vue
var blank_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var blank___vue_template_functional__ = false
/* styles */
var blank___vue_styles__ = null
/* scopeId */
var blank___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var blank___vue_module_identifier__ = null
var blank_Component = blank_normalizeComponent(
  blank,
  layout_blank,
  blank___vue_template_functional__,
  blank___vue_styles__,
  blank___vue_scopeId__,
  blank___vue_module_identifier__
)

/* harmony default export */ var src_layout_blank = (blank_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/products/crumbs.vue
//
//
//
//
//
//

/* harmony default export */ var crumbs = ({});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-e0b46d00","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/products/crumbs.vue
var crumbs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.$store.state.position)+"美团")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.$store.state.position)+_vm._s(_vm.$route.params.name))])],1)}
var crumbs_staticRenderFns = []
var crumbs_esExports = { render: crumbs_render, staticRenderFns: crumbs_staticRenderFns }
/* harmony default export */ var products_crumbs = (crumbs_esExports);
// CONCATENATED MODULE: ./src/components/products/crumbs.vue
var crumbs_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var crumbs___vue_template_functional__ = false
/* styles */
var crumbs___vue_styles__ = null
/* scopeId */
var crumbs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var crumbs___vue_module_identifier__ = null
var crumbs_Component = crumbs_normalizeComponent(
  crumbs,
  products_crumbs,
  crumbs___vue_template_functional__,
  crumbs___vue_styles__,
  crumbs___vue_scopeId__,
  crumbs___vue_module_identifier__
)

/* harmony default export */ var components_products_crumbs = (crumbs_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/products/select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var products_select = ({
    props: ["name", "list"]
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-df6370c0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/products/select.vue
var select_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-product-select"},[_c('dl',{staticClass:"tab"},[_c('dt',[_vm._v("\n            "+_vm._s(_vm.name)+"\n            "),_c('i',{staticClass:"el-icon-caret-bottom"})]),_vm._v(" "),_c('dd',[_c('dt',{staticClass:"select-title"},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_vm._l((_vm.list),function(item,index){return _c('span',{key:index},[_vm._v(_vm._s(item.name))])})],2)])])}
var select_staticRenderFns = []
var select_esExports = { render: select_render, staticRenderFns: select_staticRenderFns }
/* harmony default export */ var components_products_select = (select_esExports);
// CONCATENATED MODULE: ./src/components/products/select.vue
var select_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var select___vue_template_functional__ = false
/* styles */
var select___vue_styles__ = null
/* scopeId */
var select___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var select___vue_module_identifier__ = null
var select_Component = select_normalizeComponent(
  products_select,
  components_products_select,
  select___vue_template_functional__,
  select___vue_styles__,
  select___vue_scopeId__,
  select___vue_module_identifier__
)

/* harmony default export */ var src_components_products_select = (select_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/products/categroy.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var categroy = ({
  data: function data() {
    return {
      classicList: [{
        title: "美食",
        type: "food",
        sub_list: [{
          name: "日本菜",
          id: "Japan"
        }, {
          name: "饮品店",
          id: "drink"
        }, {
          name: "面包甜点",
          id: "cate"
        }]
      }, {
        title: "酒店住宿",
        type: "hotal",
        sub_list: [{
          name: "温泉酒店",
          id: "hot_spring"
        }, {
          name: "经济型酒店",
          id: "economy"
        }, {
          name: "高端酒店",
          id: "high"
        }]
      }],
      areaList: [{
        title: "推荐商圈",
        sub_list: [{
          name: "望京",

          id: 120000
        }, {
          name: "昌平",

          id: 12222
        }]
      }]
    };
  },

  components: {
    MSelect: src_components_products_select
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-846d3816","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/products/categroy.vue
var categroy_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-product-categroy"},[_c('dl',{staticClass:"classic"},[_c('dt',[_vm._v("分类")]),_vm._v(" "),_c('dt',[_vm._v("全部")]),_vm._v(" "),_vm._l((_vm.classicList),function(item){return _c('dd',{key:item.type},[_c('m-select',{attrs:{"name":item.title,"list":item.sub_list}})],1)})],2),_vm._v(" "),_c('dl',{staticClass:"classic"},[_c('dt',[_vm._v("区域")]),_vm._v(" "),_c('dt',[_vm._v("全部")]),_vm._v(" "),_vm._l((_vm.areaList),function(item){return _c('dd',{key:item.type},[_c('m-select',{attrs:{"name":item.title,"list":item.sub_list}})],1)})],2)])}
var categroy_staticRenderFns = []
var categroy_esExports = { render: categroy_render, staticRenderFns: categroy_staticRenderFns }
/* harmony default export */ var products_categroy = (categroy_esExports);
// CONCATENATED MODULE: ./src/components/products/categroy.vue
var categroy_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var categroy___vue_template_functional__ = false
/* styles */
var categroy___vue_styles__ = null
/* scopeId */
var categroy___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var categroy___vue_module_identifier__ = null
var categroy_Component = categroy_normalizeComponent(
  categroy,
  products_categroy,
  categroy___vue_template_functional__,
  categroy___vue_styles__,
  categroy___vue_scopeId__,
  categroy___vue_module_identifier__
)

/* harmony default export */ var components_products_categroy = (categroy_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/products/item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var item = ({
  props: ["meta"]
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-6c43bd55","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/products/item.vue
var item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"s-item"},[_c('dt',[_c('img',{attrs:{"src":_vm.meta.image,"alt":"图片"}})]),_vm._v(" "),_c('dd',[_c('h3',[_c('router-link',{attrs:{"to":{name: 'productDeatil'}}},[_vm._v(_vm._s(_vm.meta.title))])],1),_vm._v(" "),_c('p',[_c('el-rate',{attrs:{"disabled":"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:(_vm.meta.score),callback:function ($$v) {_vm.$set(_vm.meta, "score", $$v)},expression:"meta.score"}}),_vm._v(" "),(_vm.meta.score > 4.5)?_c('span',[_vm._v("很好")]):(_vm.meta.score > 4)?_c('span',[_vm._v("好")]):(_vm.meta.score > 3.5)?_c('span',[_vm._v("不错")]):(_vm.meta.score > 3)?_c('span',[_vm._v("一般")]):_c('span',[_vm._v("很差")]),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(_vm.meta.score)+"分")]),_vm._v(" "),_c('span',{staticClass:"s-item-comment-total"},[_vm._v(_vm._s(_vm.meta.commentNum)+"人评论")])],1),_vm._v(" "),_c('p',[_c('span',{staticClass:"s-item-tab"},_vm._l((_vm.meta.tab),function(v,i){return _c('span',{key:v},[_vm._v(_vm._s(v + (i < _vm.meta.tab.length - 1 ? '|' : '')))])}),0),_vm._v(" "),_c('span',{staticClass:"s-item-addr"},[_vm._v(_vm._s(_vm.meta.address))]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('p',[_c('span',{staticClass:"s-item-price"},[_vm._v("\n            人均￥"+_vm._s(_vm.meta.avg_price)+"\n        ")])]),_vm._v(" "),_c('ul',{staticClass:"deal-items"},_vm._l((_vm.meta.dealItems.slice(0, 2)),function(item,index){return _c('li',{key:index,staticClass:"items"},[_c('p',{staticClass:"deal-title"},[_vm._v("\n                "+_vm._s(item.title)+"\n            ")]),_vm._v(" "),_c('p',[_c('span',{staticClass:"deal-price"},[_vm._v("\n                    ￥"+_vm._s(item.price)+"\n                ")]),_vm._v(" "),_c('span',{staticClass:"deal-old-price"},[_vm._v("门市价￥"+_vm._s(item.counterPrice))]),_vm._v(" "),_c('span',{staticClass:"deal-sales"},[_vm._v("已售"+_vm._s(item.saleNum))])])])}),0)])])}
var item_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"el-icon-location"}),_vm._v("\n                查看地图\n            ")])])}]
var item_esExports = { render: item_render, staticRenderFns: item_staticRenderFns }
/* harmony default export */ var products_item = (item_esExports);
// CONCATENATED MODULE: ./src/components/products/item.vue
var item_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var item___vue_template_functional__ = false
/* styles */
var item___vue_styles__ = null
/* scopeId */
var item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var item___vue_module_identifier__ = null
var item_Component = item_normalizeComponent(
  item,
  products_item,
  item___vue_template_functional__,
  item___vue_styles__,
  item___vue_scopeId__,
  item___vue_module_identifier__
)

/* harmony default export */ var components_products_item = (item_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/products/list.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var list = ({
  data: function data() {
    return {
      nav: [{
        key: "s-default",
        name: "智能排序",
        active: true
      }, {
        key: "s-price",
        name: "价格最低",
        active: false
      }, {
        key: "s-score",
        name: "人气最高",
        active: false
      }, {
        key: "s-comment",
        name: "评价最高",
        active: false
      }],
      productList: []
    };
  },
  created: function created() {
    var _this = this;

    src_api.getProductsList().then(function (res) {
      _this.productList = res.data.data;
    });
  },

  components: {
    Item: components_products_item
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-724c348e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/products/list.vue
var list_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-products-list"},[_c('ul',_vm._l((_vm.nav),function(item){return _c('li',{key:item.key,class:{'s-nav-active': item.active}},[_vm._v(_vm._s(item.name))])}),0),_vm._v(" "),_c('el-row',_vm._l((_vm.productList),function(item,index){return _c('item',{key:index,attrs:{"meta":item}})}),1)],1)}
var list_staticRenderFns = []
var list_esExports = { render: list_render, staticRenderFns: list_staticRenderFns }
/* harmony default export */ var products_list = (list_esExports);
// CONCATENATED MODULE: ./src/components/products/list.vue
var list_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var list___vue_template_functional__ = false
/* styles */
var list___vue_styles__ = null
/* scopeId */
var list___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var list___vue_module_identifier__ = null
var list_Component = list_normalizeComponent(
  list,
  products_list,
  list___vue_template_functional__,
  list___vue_styles__,
  list___vue_scopeId__,
  list___vue_module_identifier__
)

/* harmony default export */ var components_products_list = (list_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/page/goodsList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var goodsList = ({
    components: {
        crumbs: components_products_crumbs,
        Categroy: components_products_categroy,
        List: components_products_list
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-4fff6b48","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/page/goodsList.vue
var goodsList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-product"},[_c('el-row',{staticClass:"m-crumbs"},[_c('crumbs')],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":19}},[_c('el-row',[_c('categroy')],1),_vm._v(" "),_c('el-row',[_c('list')],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[_vm._v("\n            map + fav\n        ")])],1)],1)}
var goodsList_staticRenderFns = []
var goodsList_esExports = { render: goodsList_render, staticRenderFns: goodsList_staticRenderFns }
/* harmony default export */ var page_goodsList = (goodsList_esExports);
// CONCATENATED MODULE: ./src/page/goodsList.vue
function goodsList_injectStyle (ssrContext) {
  __webpack_require__("bb8c")
}
var goodsList_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var goodsList___vue_template_functional__ = false
/* styles */
var goodsList___vue_styles__ = goodsList_injectStyle
/* scopeId */
var goodsList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var goodsList___vue_module_identifier__ = null
var goodsList_Component = goodsList_normalizeComponent(
  goodsList,
  page_goodsList,
  goodsList___vue_template_functional__,
  goodsList___vue_styles__,
  goodsList___vue_scopeId__,
  goodsList___vue_module_identifier__
)

/* harmony default export */ var src_page_goodsList = (goodsList_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/index/menu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var menu = ({
    data: function data() {
        return {
            curDetail: null,
            menuList: []
        };
    },
    created: function created() {
        var _this = this;

        src_api.getMenuList().then(function (res) {
            _this.menuList = res.data.data;
        });
    },

    methods: {
        menuEnter: function menuEnter(item) {
            console.log(item);
            this.curDetail = item;
        },
        menuLeave: function menuLeave() {
            var self = this;
            this.timer = setTimeout(function () {
                self.curDetail = null;
            }, 200);
        },
        detailEnter: function detailEnter() {
            clearTimeout(this.timer);
        },
        detailLeave: function detailLeave() {
            this.curDetail = null;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-272349aa","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/index/menu.vue
var menu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-menu"},[_c('dl',{staticClass:"nav",on:{"mouseleave":_vm.menuLeave}},[_c('dt',[_vm._v("全部分类")]),_vm._v(" "),_vm._l((_vm.menuList),function(item,index){return _c('dd',{key:index,on:{"mouseenter":function($event){return _vm.menuEnter(item)}}},[_c('i',{class:item.type}),_vm._v("\n            "+_vm._s(item.name)+"\n            "),_c('span',{staticClass:"arrow"})])})],2),_vm._v(" "),(_vm.curDetail)?_c('div',{staticClass:"detail",on:{"mouseenter":_vm.detailEnter,"mouseleave":_vm.detailLeave}},[_vm._l((_vm.curDetail.items),function(item,index){return [_c('h4',{key:index},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_vm._l((item.items),function(v,i){return _c('span',{key:v + '_'+ i},[_vm._v(_vm._s(v))])})]})],2):_vm._e()])}
var menu_staticRenderFns = []
var menu_esExports = { render: menu_render, staticRenderFns: menu_staticRenderFns }
/* harmony default export */ var index_menu = (menu_esExports);
// CONCATENATED MODULE: ./src/components/index/menu.vue
var menu_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var menu___vue_template_functional__ = false
/* styles */
var menu___vue_styles__ = null
/* scopeId */
var menu___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var menu___vue_module_identifier__ = null
var menu_Component = menu_normalizeComponent(
  menu,
  index_menu,
  menu___vue_template_functional__,
  menu___vue_styles__,
  menu___vue_scopeId__,
  menu___vue_module_identifier__
)

/* harmony default export */ var components_index_menu = (menu_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/index/slider.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var slider = ({
    data: function data() {
        return {
            imgList: [{
                url: '#xxx',
                img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            }, {
                url: '#ass',
                img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            }, {
                url: '#vc',
                img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            }]
        };
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-4c17d168","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/index/slider.vue
var slider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide"},[_c('el-carousel',{attrs:{"height":"240px"}},_vm._l((_vm.imgList),function(item){return _c('el-carousel-item',{key:item.img},[_c('img',{attrs:{"src":item.img,"alt":""}})])}),1)],1)}
var slider_staticRenderFns = []
var slider_esExports = { render: slider_render, staticRenderFns: slider_staticRenderFns }
/* harmony default export */ var index_slider = (slider_esExports);
// CONCATENATED MODULE: ./src/components/index/slider.vue
var slider_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var slider___vue_template_functional__ = false
/* styles */
var slider___vue_styles__ = null
/* scopeId */
var slider___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var slider___vue_module_identifier__ = null
var slider_Component = slider_normalizeComponent(
  slider,
  index_slider,
  slider___vue_template_functional__,
  slider___vue_styles__,
  slider___vue_scopeId__,
  slider___vue_module_identifier__
)

/* harmony default export */ var components_index_slider = (slider_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/index/life.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var life = ({
  components: {
    Slider: components_index_slider
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-04ac7ca0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/index/life.vue
var life_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-life"},[_c('el-row',[_c('ul',{staticClass:"nav"},[_c('li',[_c('router-link',{staticClass:"takeout",attrs:{"to":"/"}},[_vm._v("美团外卖")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("猫眼电影")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("美团酒店")])],1),_vm._v(" "),_c('li',[_c('router-link',{staticClass:"apartment",attrs:{"to":"/"}},[_vm._v("民宿/公寓")])],1),_vm._v(" "),_c('li',[_c('router-link',{staticClass:"business",attrs:{"to":"/"}},[_vm._v("商家入驻")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("美团公益")])],1)])]),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":14}},[_c('slider')],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"m-life-pic"})]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"m-life-login"},[_c('h4',[_c('img',{attrs:{"src":"//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg","alt":""}})]),_vm._v(" "),_c('p',{staticClass:"m-life-login-name"},[_vm._v("Hi！ "+_vm._s(_vm.$store.state.userName ? _vm.$store.state.userName : '你好！'))]),_vm._v(" "),(!_vm.$store.state.userName)?_c('p',[_c('router-link',{attrs:{"to":{name: 'register'}}},[_c('el-button',{attrs:{"round":""}},[_vm._v("注册")])],1)],1):_vm._e(),_vm._v(" "),(!_vm.$store.state.userName)?_c('p',[_c('router-link',{attrs:{"to":{name: 'login'}}},[_c('el-button',{attrs:{"round":""}},[_vm._v("立即登陆")])],1)],1):_vm._e()])])],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":7}},[_c('div',{staticClass:"m-life-hotel"})]),_vm._v(" "),_c('el-col',{attrs:{"span":7}},[_c('div',{staticClass:"m-life-music"})]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"m-life-coop"})]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"m-life-downapp"},[_c('img',{attrs:{"src":"//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png","alt":"下载APP"}}),_vm._v(" "),_c('p',[_vm._v("美团APP手机版")]),_vm._v(" "),_c('p',{staticClass:"last-p"},[_c('span',{staticClass:"red"},[_vm._v("\n                      1元起\n                  ")]),_vm._v("\n                  吃喝玩乐\n              ")])])])],1)],1)}
var life_staticRenderFns = []
var life_esExports = { render: life_render, staticRenderFns: life_staticRenderFns }
/* harmony default export */ var index_life = (life_esExports);
// CONCATENATED MODULE: ./src/components/index/life.vue
function life_injectStyle (ssrContext) {
  __webpack_require__("nA6+")
}
var life_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var life___vue_template_functional__ = false
/* styles */
var life___vue_styles__ = life_injectStyle
/* scopeId */
var life___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var life___vue_module_identifier__ = null
var life_Component = life_normalizeComponent(
  life,
  index_life,
  life___vue_template_functional__,
  life___vue_styles__,
  life___vue_scopeId__,
  life___vue_module_identifier__
)

/* harmony default export */ var components_index_life = (life_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/index/container.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var container = ({
  data: function data() {
    return {
      kind: "all",
      resultsData: {}
    };
  },

  props: ["nav"],
  created: function created() {
    var _this = this;

    src_api.resultsByKeywords().then(function (res) {
      console.log(res);
      _this.resultsData = res.data.data;
    });
  },

  methods: {
    over: function over(e) {
      console.log(e.target);
      var dom = e.target;
      var tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据  ajax请求
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-205b35de","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/index/container.vue
var container_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-istyle"},[_c('dl',{class:_vm.nav.class,on:{"mouseover":_vm.over}},[_c('dt',[_vm._v(_vm._s(_vm.nav.title))]),_vm._v(" "),_vm._l((_vm.nav.list),function(item,index){return _c('dd',{key:index,class:{active: _vm.kind == item.tab},attrs:{"data-type":item.tab}},[_vm._v(_vm._s(item.text))])})],2),_vm._v(" "),_c('ul',{staticClass:"ibody"},_vm._l((_vm.resultsData[_vm.kind]),function(item,index){return _c('li',{key:index},[_c('el-card',{attrs:{"body-style":{ padding: '0px' },"shadow":"never"}},[_c('img',{staticClass:"image",attrs:{"src":item.image}}),_vm._v(" "),_c('div',{staticClass:"cbody"},[_c('div',{staticClass:"title",attrs:{"title":item.title}},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"sub-title",attrs:{"title":item.sub_title}},[_vm._v(_vm._s(item.sub_title))]),_vm._v(" "),_c('div',{staticClass:"price-info"},[_c('span',{staticClass:"current-price-wrapper"},[_c('span',{staticClass:"price-symbol numfont"},[_vm._v("¥")]),_vm._v(" "),_c('span',{staticClass:"current-price numfont"},[_vm._v(_vm._s(item.price))])]),_vm._v(" "),_c('span',{staticClass:"sold bottom-right-info"},[_vm._v(_vm._s(item.address))])])])])],1)}),0)])}
var container_staticRenderFns = []
var container_esExports = { render: container_render, staticRenderFns: container_staticRenderFns }
/* harmony default export */ var index_container = (container_esExports);
// CONCATENATED MODULE: ./src/components/index/container.vue
function container_injectStyle (ssrContext) {
  __webpack_require__("/Wgr")
}
var container_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var container___vue_template_functional__ = false
/* styles */
var container___vue_styles__ = container_injectStyle
/* scopeId */
var container___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var container___vue_module_identifier__ = null
var container_Component = container_normalizeComponent(
  container,
  index_container,
  container___vue_template_functional__,
  container___vue_styles__,
  container___vue_scopeId__,
  container___vue_module_identifier__
)

/* harmony default export */ var components_index_container = (container_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/page/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var page = ({
    data: function data() {
        return {
            iStyle: {
                class: 'istyle',
                title: '有格调',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '约会聚餐',
                    tab: 'food'
                }, {
                    text: '丽人SPA',
                    tab: 'spa'
                }, {
                    text: '电影演出',
                    tab: 'movie'
                }, {
                    text: '品质出游',
                    tab: 'travel'
                }]
            },
            recomment: {
                class: 'youhui',
                title: '很优惠',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '美食',
                    tab: 'food'
                }, {
                    text: '休闲',
                    tab: 'xiuxian'
                }]
            }
        };
    },

    components: {
        MMenu: components_index_menu,
        MLife: components_index_life,
        Container: components_index_container
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-76b4a37e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/page/index.vue
var page_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-index"},[_c('el-row',[_c('el-col',{attrs:{"span":5}},[_c('m-menu')],1),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_c('m-life')],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('container',{attrs:{"nav":_vm.iStyle}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('container',{attrs:{"nav":_vm.recomment}})],1)],1)],1)}
var page_staticRenderFns = []
var page_esExports = { render: page_render, staticRenderFns: page_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_page = (page_esExports);
// CONCATENATED MODULE: ./src/page/index.vue
function page_injectStyle (ssrContext) {
  __webpack_require__("MJbH")
}
var page_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var page___vue_template_functional__ = false
/* styles */
var page___vue_styles__ = page_injectStyle
/* scopeId */
var page___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var page___vue_module_identifier__ = null
var page_Component = page_normalizeComponent(
  page,
  selectortype_template_index_0_src_page,
  page___vue_template_functional__,
  page___vue_styles__,
  page___vue_scopeId__,
  page___vue_module_identifier__
)

/* harmony default export */ var src_page = (page_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/changeCity/select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var changeCity_select = ({
    data: function data() {
        return {};
    },

    props: ["list", "title", "value", "showWrapperActive", "disabled", "className"],
    computed: {
        renderList: function renderList() {
            var col = Math.ceil(this.list.length / 12);
            var resultList = [];
            for (var i = 0; i < col; i++) {
                var data = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(data);
            }
            return resultList;
        }
    },
    methods: {
        showWrapper: function showWrapper(e) {
            e.stopPropagation();
            // this.showWrapperActive = true;
            if (!this.disabled) {
                this.$emit('change_active', true);
            }
        },
        documentClick: function documentClick() {
            this.$emit('change_active', false);
            console.log('document-click');
        },
        changeValue: function changeValue(item) {
            this.$emit('change', item);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-3427c90a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/changeCity/select.vue
var changeCity_select_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"document-click",rawName:"v-document-click",value:(_vm.documentClick),expression:"documentClick"}],class:['choose-wrap', _vm.disabled?'disabled':''],on:{"click":_vm.showWrapper}},[_c('div',{staticClass:"choose"},[_c('span',[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),_c('i',{staticClass:"el-icon-caret-bottom"}),_vm._v(" "),_c('div',{class:{'mt-content': true, 'active': _vm.showWrapperActive}},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{class:['wrapper', _vm.className]},_vm._l((_vm.renderList),function(listData,index){return _c('div',{key:index,staticClass:"col"},_vm._l((listData),function(item,index){return _c('span',{key:index,class:{'mt-item': true, 'active': item.name == _vm.value},on:{"click":function($event){return _vm.changeValue(item)}}},[_vm._v(_vm._s(item.name))])}),0)}),0)])])])}
var changeCity_select_staticRenderFns = []
var changeCity_select_esExports = { render: changeCity_select_render, staticRenderFns: changeCity_select_staticRenderFns }
/* harmony default export */ var components_changeCity_select = (changeCity_select_esExports);
// CONCATENATED MODULE: ./src/components/changeCity/select.vue
function select_injectStyle (ssrContext) {
  __webpack_require__("tI0c")
}
var changeCity_select_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var changeCity_select___vue_template_functional__ = false
/* styles */
var changeCity_select___vue_styles__ = select_injectStyle
/* scopeId */
var changeCity_select___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var changeCity_select___vue_module_identifier__ = null
var changeCity_select_Component = changeCity_select_normalizeComponent(
  changeCity_select,
  components_changeCity_select,
  changeCity_select___vue_template_functional__,
  changeCity_select___vue_styles__,
  changeCity_select___vue_scopeId__,
  changeCity_select___vue_module_identifier__
)

/* harmony default export */ var src_components_changeCity_select = (changeCity_select_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/changeCity/province.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var province = ({
  data: function data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: '',
      loading: false,
      cityDisabled: true
    };
  },

  components: {
    MSelect: src_components_changeCity_select
  },
  created: function created() {
    var _this = this;

    src_api.getProvinceList().then(function (res) {
      _this.provinceList = res.data.data.map(function (item) {
        item.name = item.provinceName;
        return item;
      });
      console.log(_this.provinceList);
    });
  },

  methods: {
    changeProvinceActive: function changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive: function changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince: function changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity: function changeCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({ name: 'index' });
    },
    remoteMethod: function remoteMethod(val) {
      // 请求后端接口
      console.log(document.cookie, localStorage);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-523eb8a4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/changeCity/province.vue
var province_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',{staticClass:"name"},[_vm._v("按省份选择:")]),_vm._v(" "),_c('m-select',{attrs:{"list":_vm.provinceList,"title":"省份","value":_vm.province,"showWrapperActive":_vm.provinceActive,"className":"province"},on:{"change_active":_vm.changeProvinceActive,"change":_vm.changeProvince}}),_vm._v(" "),_c('m-select',{attrs:{"list":_vm.cityList,"title":"城市","value":_vm.city,"showWrapperActive":_vm.cityActive,"disabled":_vm.cityDisabled,"className":"city"},on:{"change_active":_vm.changeCityActive,"change":_vm.changeCity}}),_vm._v(" "),_c('span',[_vm._v("直接搜索:")]),_vm._v(" "),_c('el-select',{attrs:{"filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入关键词","remote-method":_vm.remoteMethod,"loading":_vm.loading},model:{value:(_vm.searchWord),callback:function ($$v) {_vm.searchWord=$$v},expression:"searchWord"}},_vm._l((_vm.searchList),function(item){return _c('el-option',{key:item,attrs:{"label":item,"value":item}})}),1)],1)}
var province_staticRenderFns = []
var province_esExports = { render: province_render, staticRenderFns: province_staticRenderFns }
/* harmony default export */ var changeCity_province = (province_esExports);
// CONCATENATED MODULE: ./src/components/changeCity/province.vue
function province_injectStyle (ssrContext) {
  __webpack_require__("Rfm5")
}
var province_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var province___vue_template_functional__ = false
/* styles */
var province___vue_styles__ = province_injectStyle
/* scopeId */
var province___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var province___vue_module_identifier__ = null
var province_Component = province_normalizeComponent(
  province,
  changeCity_province,
  province___vue_template_functional__,
  province___vue_styles__,
  province___vue_scopeId__,
  province___vue_module_identifier__
)

/* harmony default export */ var components_changeCity_province = (province_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/changecity/hot.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var hot = ({
    props: ["title", "list"]
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-2d19429b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/changecity/hot.vue
var hot_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-hcity"},[_c('dl',[_c('dt',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm._l((_vm.list),function(item,index){return _c('dd',{key:index},[_vm._v("\n            "+_vm._s(item)+"\n        ")])})],2)])}
var hot_staticRenderFns = []
var hot_esExports = { render: hot_render, staticRenderFns: hot_staticRenderFns }
/* harmony default export */ var changecity_hot = (hot_esExports);
// CONCATENATED MODULE: ./src/components/changecity/hot.vue
function hot_injectStyle (ssrContext) {
  __webpack_require__("ryNu")
}
var hot_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var hot___vue_template_functional__ = false
/* styles */
var hot___vue_styles__ = hot_injectStyle
/* scopeId */
var hot___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var hot___vue_module_identifier__ = null
var hot_Component = hot_normalizeComponent(
  hot,
  changecity_hot,
  hot___vue_template_functional__,
  hot___vue_styles__,
  hot___vue_scopeId__,
  hot___vue_module_identifier__
)

/* harmony default export */ var components_changecity_hot = (hot_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/changeCity/category.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var category = ({
    data: function data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList: [],
            cityGroup: {}
        };
    },
    created: function created() {
        var _this = this;

        src_api.getCityList().then(function (res) {
            var obj = {};
            res.data.data.forEach(function (item, index) {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            _this.cityGroup = obj;
        });
    },

    methods: {
        changeCity: function changeCity(item) {
            console.log('item=====', item);
            this.$store.dispatch('setPosition', item);
            this.$router.push({ name: 'index' });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-58708216","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/changeCity/category.vue
var category_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category"},[_c('dl',{staticClass:"m-categroy"},[_c('dt',[_vm._v("按拼音首字母选择：")]),_vm._v(" "),_vm._l((_vm.list),function(item,index){return _c('dd',{key:index},[_c('a',{attrs:{"href":'#city-' + item}},[_vm._v(_vm._s(item))])])})],2),_vm._v(" "),_vm._l((_vm.cityGroup),function(item,index){return _c('dl',{key:index,staticClass:"m-categroy-section ",attrs:{"id":'city-'+ index}},[_c('dt',[_vm._v(_vm._s(index))]),_vm._v(" "),_c('dd',_vm._l((item),function(city){return _c('span',{key:city.id,on:{"click":function($event){return _vm.changeCity(city)}}},[_vm._v(" "+_vm._s(city.name))])}),0)])})],2)}
var category_staticRenderFns = []
var category_esExports = { render: category_render, staticRenderFns: category_staticRenderFns }
/* harmony default export */ var changeCity_category = (category_esExports);
// CONCATENATED MODULE: ./src/components/changeCity/category.vue
function category_injectStyle (ssrContext) {
  __webpack_require__("JC7b")
}
var category_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var category___vue_template_functional__ = false
/* styles */
var category___vue_styles__ = category_injectStyle
/* scopeId */
var category___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var category___vue_module_identifier__ = null
var category_Component = category_normalizeComponent(
  category,
  changeCity_category,
  category___vue_template_functional__,
  category___vue_styles__,
  category___vue_scopeId__,
  category___vue_module_identifier__
)

/* harmony default export */ var components_changeCity_category = (category_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/page/changeCity.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var changeCity = ({
    data: function data() {
        return {
            hotList: [],
            rencentList: []
        };
    },
    created: function created() {
        var _this = this;

        src_api.getHotCity().then(function (res) {
            _this.hotList = res.data.data.map(function (item) {
                return item.name;
            });
        });
        src_api.getRecentCity().then(function (res) {
            _this.rencentList = res.data.data.map(function (item) {
                return item.name;
            });
        });
    },

    components: {
        Province: components_changeCity_province,
        hot: components_changecity_hot,
        Category: components_changeCity_category
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-025fc49f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/page/changeCity.vue
var changeCity_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-changeCity"},[_c('el-row',[_c('province')],1),_vm._v(" "),_c('el-row',[_c('hot',{attrs:{"title":"热门城市:","list":_vm.hotList}})],1),_vm._v(" "),_c('el-row',[_c('hot',{attrs:{"title":"最近访问:","list":_vm.rencentList}})],1),_vm._v(" "),_c('el-row',[_c('category')],1)],1)}
var changeCity_staticRenderFns = []
var changeCity_esExports = { render: changeCity_render, staticRenderFns: changeCity_staticRenderFns }
/* harmony default export */ var page_changeCity = (changeCity_esExports);
// CONCATENATED MODULE: ./src/page/changeCity.vue
var changeCity_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var changeCity___vue_template_functional__ = false
/* styles */
var changeCity___vue_styles__ = null
/* scopeId */
var changeCity___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var changeCity___vue_module_identifier__ = null
var changeCity_Component = changeCity_normalizeComponent(
  changeCity,
  page_changeCity,
  changeCity___vue_template_functional__,
  changeCity___vue_styles__,
  changeCity___vue_scopeId__,
  changeCity___vue_module_identifier__
)

/* harmony default export */ var src_page_changeCity = (changeCity_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/page/login.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var page_login = ({
    data: function data() {
        return {
            userName: '',
            password: '',
            error: ''
        };
    },

    methods: {
        submit: function submit() {
            var _this = this;

            console.log(this.userName, this.password);
            if (!this.userName) {
                this.error = '请输入账号';
                return false;
            }
            if (!this.password) {
                this.error = '请输入密码';
                return false;
            }
            src_api.login({
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 'success') {
                    _this.$router.push({ name: 'index' });
                    _this.$store.commit('setUserName', _this.userName);
                } else {
                    _this.error = res.data.msg;
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7da61cac","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/page/login.vue
var login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-login"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"login-panel"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"form"},[(_vm.error)?_c('h4',{staticClass:"tips"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('el-input',{class:{error: _vm.error && !_vm.userName},attrs:{"placeholder":"手机号/用户名/邮箱","prefix-icon":"profile"},model:{value:(_vm.userName),callback:function ($$v) {_vm.userName=$$v},expression:"userName"}}),_vm._v(" "),_c('el-input',{class:{error: _vm.error && !_vm.password},attrs:{"type":"password","placeholder":"密码","prefix-icon":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('el-button',{staticClass:"btn-login",attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("登录")]),_vm._v(" "),_c('p',{staticClass:"reg"},[_c('span',[_vm._v("还没有账号？")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'register'}}},[_vm._v("免费注册")])],1),_vm._v(" "),_vm._m(4)],1)]),_vm._v(" "),_vm._m(5)])}
var login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-header"},[_c('a',{staticClass:"logo",attrs:{"href":"http://www.meituan.com"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner"},[_c('img',{attrs:{"src":"//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg","width":"480","height":"370","alt":"美团网"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',[_vm._v("\n                   账号登陆\n               ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"foot"},[_c('a',{attrs:{"href":"#"}},[_vm._v("忘记密码?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"oauth-wrapper"},[_c('h3',{staticClass:"title-wrapper"},[_c('span',{staticClass:"title"},[_vm._v("用合作网站账号登录")])]),_vm._v(" "),_c('div',{staticClass:"oauth cf"},[_c('a',{staticClass:"oauth__link oauth__link--qq",attrs:{"href":"/account/connect/tencent","data-mtevent":"{\"la\":\"oauth/qq\"}","target":"_blank"}}),_vm._v(" "),_c('a',{staticClass:"oauth__link oauth__link--weibo",attrs:{"href":"/account/connect/sina","data-mtevent":"{\"la\":\"oauth/sina\"}","target":"_blank"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("关于美团")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("加入我们")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("商家入驻")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("帮助中心")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("美团手机版")])])]),_vm._v(" "),_c('p',[_vm._v("©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号")])])}]
var login_esExports = { render: login_render, staticRenderFns: login_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_page_login = (login_esExports);
// CONCATENATED MODULE: ./src/page/login.vue
function login_injectStyle (ssrContext) {
  __webpack_require__("6Ufb")
}
var login_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var login___vue_template_functional__ = false
/* styles */
var login___vue_styles__ = login_injectStyle
/* scopeId */
var login___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var login___vue_module_identifier__ = null
var login_Component = login_normalizeComponent(
  page_login,
  selectortype_template_index_0_src_page_login,
  login___vue_template_functional__,
  login___vue_styles__,
  login___vue_scopeId__,
  login___vue_module_identifier__
)

/* harmony default export */ var src_page_login = (login_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/page/register.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var page_register = ({
  data: function data() {
    var _this = this;

    var validateUser = function validateUser(rule, value, callback) {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = function validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (_this.registerForm.rePassword !== '') {
          _this.$refs.registerForm.validateField('rePassword');
        }
        callback();
      }
    };
    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== _this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          src_api.register({
            params: _this2.registerForm
          }).then(function (res) {
            if (res.data.status == 'success') {
              _this2.$router.push({ name: 'login' });
            } else {
              alert(res.data.msg);
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    input: function input() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /_/g;
      var strongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regStr) && this.registerForm.password.match(regNum);

      console.log('abc123_'.match(reg));
      if (this.registerForm.password.length > 20 || this.registerForm.password.length > 6 && strongth) {
        this.strengthClass = 'strong';
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = 'week';
      } else if (!this.registerForm.password) {
        this.strengthClass = '';
      } else {
        this.strengthClass = 'normal';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-8bc46c54","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/page/register.vue
var register_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-register"},[_c('div',{staticClass:"header"},[_c('header',[_c('a',{staticClass:"site-logo",attrs:{"href":"#"}}),_vm._v(" "),_c('div',{staticClass:"login"},[_c('span',[_vm._v("已有美团账号")]),_vm._v(" "),_c('router-link',{attrs:{"to":{naem: 'login'}}},[_vm._v("登录")])],1)])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('el-form',{ref:"registerForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.registerForm,"status-icon":"","rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"用户名","prop":"userName"}},[_c('el-input',{attrs:{"type":"text","autocomplete":"off"},model:{value:(_vm.registerForm.userName),callback:function ($$v) {_vm.$set(_vm.registerForm, "userName", $$v)},expression:"registerForm.userName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","prop":"password"}},[_c('el-input',{attrs:{"type":"password","autocomplete":"off"},on:{"input":_vm.input},model:{value:(_vm.registerForm.password),callback:function ($$v) {_vm.$set(_vm.registerForm, "password", $$v)},expression:"registerForm.password"}}),_vm._v(" "),_c('div',{staticClass:"pw-strength"},[_c('div',{class:['bar', _vm.strengthClass]}),_vm._v(" "),_c('div',{staticClass:"letter"},[_c('span',[_vm._v("弱")]),_vm._v(" "),_c('span',[_vm._v("中")]),_vm._v(" "),_c('span',[_vm._v("强")])])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"确认密码","prop":"rePassword"}},[_c('el-input',{attrs:{"type":"password","autocomplete":"off"},model:{value:(_vm.registerForm.rePassword),callback:function ($$v) {_vm.$set(_vm.registerForm, "rePassword", $$v)},expression:"registerForm.rePassword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('registerForm')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('footer')])}
var register_staticRenderFns = []
var register_esExports = { render: register_render, staticRenderFns: register_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_page_register = (register_esExports);
// CONCATENATED MODULE: ./src/page/register.vue
function register_injectStyle (ssrContext) {
  __webpack_require__("eVFC")
}
var register_normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var register___vue_template_functional__ = false
/* styles */
var register___vue_styles__ = register_injectStyle
/* scopeId */
var register___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var register___vue_module_identifier__ = null
var register_Component = register_normalizeComponent(
  page_register,
  selectortype_template_index_0_src_page_register,
  register___vue_template_functional__,
  register___vue_styles__,
  register___vue_scopeId__,
  register___vue_module_identifier__
)

/* harmony default export */ var src_page_register = (register_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js









vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    component: src_layout_default,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: src_page_goodsList
    }, {
      path: '/index',
      name: 'index',
      component: src_page
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: src_page_changeCity
    }]
  }, {
    path: '/blank',
    name: 'blank',
    component: src_layout_blank,
    children: [{
      path: 'login',
      name: 'login',
      component: src_page_login
    }, {
      path: 'register',
      name: 'register',
      component: src_page_register
    }]
  }]
}));
// EXTERNAL MODULE: ./node_modules/_element-ui@2.13.0@element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("TcQY");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/_element-ui@2.13.0@element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("09yM");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./src/assets/css/main.css
var main = __webpack_require__("CuRo");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/_vuex@3.1.2@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("48sp");

// CONCATENATED MODULE: ./src/store.js



vue_esm["default"].use(vuex_esm["a" /* default */]);

var state = {
  position: {},
  userName: ''
};

var mutations = {
  setPosition: function setPosition(state, val) {
    state.position = val;
  },
  setUserName: function setUserName(state, val) {
    state.userName = val;
  }
};

var actions = {
  setPosition: function setPosition(_ref, val) {
    var commit = _ref.commit;

    // 异步请求后端获取当前位置数据
    commit('setPosition', val);
  }
};

/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  state: state,
  mutations: mutations,
  actions: actions
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







vue_esm["default"].use(element_ui_common_default.a);
vue_esm["default"].config.productionTip = false;
vue_esm["default"].directive('document-click', {
  bind: function bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false);
  },
  inserted: function inserted() {
    console.log('insert');
  },
  update: function update() {
    console.log('update');
  }
});
/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  store: store,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "NyR4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Rfm5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U2ac":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VotE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bb8c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eVFC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fnLZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nA6+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rxFh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ryNu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tI0c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.1493c3fcc1aded69b576.js.map