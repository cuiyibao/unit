import typeOf from './typeOf'

var isAjaxing = false

export const stopPoint = function() {
  return function(PromiseArray) {
    if(isAjaxing) { return }
    PromiseArray = PromiseArray.map((v, k) => {
      if(typeOf(v) !== 'Promise'){
        return new Promise(() => { v() })
      }
      return v
    })
    Promise.all(PromiseArray)
      .then(() => {
        isAjaxing = false
      })
      .catch(() => {
        isAjaxing = false
      })
    isAjaxing = true
  }
}