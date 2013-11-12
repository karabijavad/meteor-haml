if (typeof Meteor === 'undefined) {
    // Not Running In Meteor (nodejs code)
    // example NPM/Node Dependencies that we'll use
    var async = require('async');
    var debug = require('debug')('my:package');
    var mongodb = require('mongodb');

    var http = require('http');  
} else {
    // Running as Meteor Package
    var async = Npm.require('async');
    var debug = Npm.require('debug')('my:package');
    var mongodb = Npm.require('mongodb');

    // node core module 'http'
    // use Npm.require to require node core modules
    // but doesnt need Npm.depends in the package.js file
    var http = Npm.require('http');
}

var constructor = function(property1) {
    this.property1 = property1; // or whatever in your constructor.
};

if (typeof Meteor === 'undefined') {
   // Export it node style
   My = exports = module.exports = constructor; // Limit scope to this nodejs file
} else {
   // Export it meteor style
   My = constructor; // Make it a global
}

// Proceed defining methods / properties as usual.
My.prototype.doStuff = function() { console.log('hello world'); }

