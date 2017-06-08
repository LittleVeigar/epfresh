/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 清空localStorage
 */
export const clearStore = () => {
  window.localStorage.clear()
}

/**
 * 遍历localStorage
 */

export const traverseStore = () => {
  let storage = window.localStorage
  let result = []
  console.log(storage.length)
  for (var i = 0, len = storage.length; i < len; i++) {
    console.log(i)
    let key = storage.key(i)
    let value = storage.getItem(key)
    console.log(key + '=' + value)
    result.push(value)
  }
  return result
}
