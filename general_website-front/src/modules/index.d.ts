/**
 * 获取默认接口下的类型
 */
type DefaultObject<T> = {
  [P in keyof T]: T[P];
}
export { DefaultObject }