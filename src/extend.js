import { deepClone } from './deepClone'

export const extend = (obj1, obj2) => {
	const object = deepClone(obj1)

	for (let k in obj2) {
		if(obj2.hasOwnProperty(k) && !object.hasOwnProperty(k)){
			object[k] = obj2[k]
		}
	}

	return object
}