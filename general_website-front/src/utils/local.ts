import { RouteObject } from '@/routers/interface'

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export const localGet = (key: string) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key) as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export const localSet = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export const localRemove = (key: string) => {
  window.localStorage.removeItem(key)
}

/**
 * @description 清除所有localStorage
 * @return void
 */
export const localClear = () => {
  window.localStorage.clear()
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export const getBrowserLang = () => {
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage
  let defaultBrowserLang = ''
  if (
    browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'zh-cn'
  ) {
    defaultBrowserLang = 'zh'
  } else {
    defaultBrowserLang = 'en'
  }
  return defaultBrowserLang
}

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
  let newStr: string = ''
  let newArr: any[] = []
  let arr = path.split('/').map(i => '/' + i)
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i]
    newArr.push(newStr)
  }
  return newArr
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {}

  for (let item of routes) {
    if (item.path === path) {
      return item
    }
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export const isType = (val: any) => {
  if (val === null) return 'null'
  if (typeof val !== 'object') return typeof val
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}

/**
 * @description 对象数组深克隆
 * @param {Object} obj 源对象
 * @return object
 */
export const deepCopy = <T>(obj: any): T => {
  let newObj: any
  try {
    newObj = obj.push ? [] : {}
  } catch (error) {
    newObj = {}
  }
  for (let attr in obj) {
    if (typeof obj[attr] === 'object') {
      newObj[attr] = deepCopy(obj[attr])
    } else {
      newObj[attr] = obj[attr]
    }
  }
  return newObj
}

/**
 * @description 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return number
 */
export function randomNum(min: number, max: number): number {
  let num = Math.floor(Math.random() * (min - max) + max)
  return num
}
