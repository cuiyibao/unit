export const typeOf = function(item) {
  const _ts = Object.prototype.toString

  if(_ts.call(item) === "[object Promise]"){
    return "Promise"
  }

  if(_ts.call(item) === "[object Function]"){
    return "Function"
  }

  if(_ts.call(item) === "[object Object]"){
    return "Object"
  }

  if(_ts.call(item) === "[object Array]"){
    return "Array"
  }

  if(_ts.call(item) === "[object Null]"){
    return "Null"
  }

  if(_ts.call(item) === "[object Undefined]"){
    return "Undefined"
  }
  
  if(_ts.call(item) === "[object String]"){
    return "String"
  }

  if(_ts.call(item) === "[object Number]"){
    return "Number"
  }

  if(_ts.call(item) === "[object Boolean]"){
    return "Boolean"
  }
}