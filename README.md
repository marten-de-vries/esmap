# esmap

  Map over [esprima] nodes conveniently.

## Installation

    npm install esmap

## API
### esmap(node, fn(node, key, parent)) -> Node

  Maps over the given node's children with the given function.
  Returns a fresh node.

  If a node has a property with an array of children, `fn(child, key, node)` is called for every child as if they were direct descendants, but the truthy return values are `Array#concat`'d together.
  A falsy value is ignored (the node is removed from the array), an array value is concatenated, a non-array value is placed into the array.

[esprima]: http://esprima.org
