'use strict';
var keys = require('./keys')
  , objmap = require('objmap')
  , __hop = {}.hasOwnProperty

module.exports = function map(node, fn) {
  if (!node) return node

  var newNode =
      objmap.keys(keys[node.type], function(key) {
        var child = node[key]
        if (Array.isArray(child))
          return child.reduce(function(acc, child) {
            return acc.concat(fn(child, key, node) || [])
          }, [])
        return fn(child, key, node)
      })

  for (var key in node)
    if (__hop.call(node, key) && !__hop.call(newNode, key))
      newNode[key] = node[key]

  return newNode
}
