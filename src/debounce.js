import { typeOf } from './typeOf'

class Disabled{
  constructor(){
    this.b = true
  }
}

export const debounce = function() {
  const sign = new Disabled();
  return function(func) {
    if(sign.b){
      func().then((callback) => {
        if (typeOf(callback) === "Promise"){
          callback().then(() => {
            sign.b = true
          })
        } else if (typeOf(callback) === "Function"){
          callback()
          sign.b = true
        } else {
          sign.b = true
        }
      }).catch((e) => {
        console.log(e)
        sign.b = true
      })
      sign.b = false
    }
  }
}