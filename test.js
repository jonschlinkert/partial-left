/*!
 * partial-left <https://github.com/jonschlinkert/partial-left>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var path = require('path');
var assert = require('assert');
var should = require('should');
var partial = require('./');

describe('partial', function () {
  it('should partially apply arguments from the left:', function () {
    function resolve(dir, filename) {
      return path.join.apply(path, [].slice.call(arguments));
    }

    var fn = partial(resolve, 'site', 'blog', 'posts');
    fn('index.html').should.equal('site/blog/posts/index.html');
  });


  it('should partially apply arguments from the left:', function () {
    var data = {dirname: 'posts', basename: 'index.html'};

    var resolve = function (dir, filename) {
      var args = [].slice.call(arguments);
      args.push(this.dirname);
      args.push(this.basename);
      return path.join.apply(path, args);
    };

    var fn = partial(data, resolve, 'site');
    fn('blog').should.equal('site/blog/posts/index.html');
  });
});
