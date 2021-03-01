const showdown = require('showdown')
const loaderUtils = require('loader-utils')

module.exports = function (content) {

  const options = loaderUtils.getOptions(this)
  this.cacheable()

  const converter = new showdown.Converter(options)

  const html = converter.makeHtml(content);
  return html
}