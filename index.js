/**
 * 
 */

import { debounce } from './src/debounce'
import { typeOf } from './src/typeOf'
import { deepClone } from './src/deepClone'
import { extend } from './src/extend'
import { nExtend } from './src/node-extend'

export default {
  debounce: debounce(),
  typeOf: typeOf,
  deepClone: deepClone,
  extend: extend,
  stopPoint: stopPoint(),
  nExtend: nExtend,
}