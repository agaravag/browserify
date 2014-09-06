var $ = require('jquery');
var Post = require('./post');
var Post2 = require('./post2');
var Post3 = require('./post3');

var how_to_use_browserify = new Post("How to use browserify");

$('body').append('<h2>' + how_to_use_browserify.title + '</h2>');

var movie_title = new Post2("The Matrix");
$('body').append('<h3>' + movie_title.title + '</h3>');

var book_title = new Post3("The Lord of The Rings");
$('body').append('<h3>' + book_title.title + '</h3>');
