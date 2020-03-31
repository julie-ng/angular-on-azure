const base = require('./karma.base-config');

module.exports = function (config) {
  config.set({
		...base,
		logLevel: config.LOG_INFO,
		browsers: ['ChromeHeadless']
	});
};
