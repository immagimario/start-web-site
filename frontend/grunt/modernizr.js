module.exports = {
	dist: {
    "dest" : "<%= project.jsvendor %>/modernizr.min.js",
    "parseFiles": true,
    "options": [
      "setClasses",
			"domPrefixes",
			"prefixes",
			"addTest",
			"atRule",
			"hasEvent",
			"mq",
			"prefixed",
			"prefixedCSS",
			"prefixedCSSValue",
			"testAllProps",
			"testProp",
			"testStyles",
    ],
    "uglify": true
  }
};