const { plugins } = require('restify');

const { preflight } = require('./cors');

const pre = [preflight, plugins.pre.context(), plugins.pre.dedupeSlashes()];

module.exports = pre;
