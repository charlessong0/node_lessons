var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb'),
    Server = require('server');

module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});

