import { createParamDecorator } from '@nestjs/common';

/**
 * @description 用于去除对象中的'_id'和'__v'字段,只能用于单一查询
 * @param target 表示被装饰的类实例
 * @param propertyKey 表示被装饰的方法名
 * @param descriptor 表示被装饰的方法的属性描述符
 * @returns 返回一个干净的对象结构
 */
export const ClearUselessPropertie = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    const info = await originalMethod.apply(this, args);
    const newResult = JSON.parse(JSON.stringify(info));
    // 修改返回值
    if (newResult.constructor === Object) {
      delete newResult._id;
      delete newResult.__v;
    } else if (newResult.constructor === Array) {
      for (let i = 0; i < newResult.length; i++) {
        if ('_id' in newResult[i]) {
          delete newResult[i]._id;
        }
        if ('__v' in newResult[i]) {
          delete newResult[i].__v;
        }
      }
    }
    return newResult;
  };
  return descriptor;
};

export const CurrentUser = createParamDecorator((data, req) => {
  return req.user;
});
