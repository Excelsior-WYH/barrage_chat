
	var express = require('express');
	var io = require('../socket');
	exports.index = function (req, res, next) {
		res.render('index', {
			title: "我要上墙"
		})	
	};
	
	
	exports.getContent = function (req, res, next) {
		var _info = req.body;
		io.wallShow(_info);
	};