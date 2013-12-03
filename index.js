'use strict';
var keys = require('./keys')
  , objmap = require('objmap')
  , __hop = {}.hasOwnProperty
  
module.exports = function(node, fn) {
  var newNode =
      objmap.keys(keys[node.type], function(key) {
        return fn(node[key], key, node)
      })
  for (var key in node)
    if (__hop.call(node, key) && !__hop.call(newNode, key))
      newNode[key] = node[key]
  return newNode
}
