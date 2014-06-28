//modules

var express   = require('express');
var app       = module.exports = express();
var config    = require('../config');
var Reader    = require('./lib/reader');
var reader    = new Reader(config.reader ? config.reader : {});
var _         = require('lodash');
var async     = require('async');
var md        = require('marked');

app.get('api/', function(req,res) {
    var slug = [''];
    var payload = {};
    payload = reader.getChildren('/', 0, function(result) {
        if (result.length > 0) {
            res.send(result);
        }
    });
});

app.get('api/*', function(req,res) {
    var slug = req.params;
    var payload = {};
    payload = reader.getFile(slug);

    res.send(payload);
});

