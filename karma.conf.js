// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// Note: this project separates out configuration into separate files
const base = require('./karma.base-config');

module.exports = function (config) {
  config.set({
		...base,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],
		autoWatch: true,
		singleRun: false,
		restartOnFileChange: true
	});
};