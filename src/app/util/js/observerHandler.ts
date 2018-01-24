/**
 * 处理observerble
 */
import {CourseRandomColors, defaultCoursesColors} from "../../shared/model/main/course.model";
import {Observable as oriObserverble} from 'rxjs/Rx'

// 给observerble返回的为包含对象的字典的每个对象添加相应的属性.
export function addProp(objListOb,propList, propName) {
  const propOb = oriObserverble.from(propList)

  return objListOb.flatMap((data:any):any => {
    return oriObserverble.zip(oriObserverble.from(data), propOb, (obj, prop) => {
      obj[propName] = prop;
      return obj;
    }).toArray();
  });
}


// 给observerble返回的为包含对象的字典的每个对象随机添加列表内的属性.

export function addRandomProp (objListOb,propList, propName) {
  const propOb = oriObserverble.of('OK').map(() => {
    return propList[Math.floor(Math.random() * propList.length)];
  });

  return objListOb.flatMap((data:any):any => {
    return oriObserverble.zip(oriObserverble.from(data), propOb.repeat(data.length), (obj, prop) => {
      obj[propName] = prop;
      return obj;
    }).toArray();
  });

}




