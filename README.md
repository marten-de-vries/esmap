# esmap

  Map over [esprima] nodes conveniently.

## Installation

    npm install esmap

## API
### esmap(node, fn(node, key, parent)) -> Node

  Maps over the given node's children with the given function.
  Returns a fresh node.

[esprima]: http://esprima.org
