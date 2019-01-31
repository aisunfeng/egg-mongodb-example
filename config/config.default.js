// config/config.default.js
// 切记：要改为自己的 key 值
exports.keys = "123456";
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// mount middleware
exports.middleware = [
  'errorHandler'
];
exports.errorHandler = {
  match: '/api',
},
exports.security = {
  ignore: '/api/',
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};
exports.mongoose = {
  url: 'mongodb://root:123456@127.0.0.1/testdb?authSource=admin',
  options: {
  }
};

