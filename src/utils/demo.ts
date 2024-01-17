import {
  cloneDeep,
  uniq,
  uniqWith,
  isEqual,
  chunk,
  compact,
  reject,
  find,
  filter,
  map,
  max,
  min,
  sum,
  intersection
} from 'lodash'
// 1.0、数组深拷贝
const s = [{ a: 1 }, { b: 2 }]

const d = cloneDeep(s)
console.log('数组深拷贝', d) //同上
console.log(d[0] === s[0]) //false

// 2.0、数组去重
const arr = [1, 1, 2, 3, 3, 4]
const ary = uniq(arr)
// var ary1 = [...new Set(arr)]
const ary2 = Array.from(new Set(arr))
console.log('数组去重', ary, ary2) // [1,2,3,4]

const arrObj = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: 1 },
  { x: 1, y: 2 }
]
const a14 = uniqWith(arrObj, isEqual)
console.log('数组对象去重', a14) // [ { x: 1, y: 2 }, { x: 2, y: 1 } ]

const arr84 = [1, 2, 3, 5, 9, 8]
const arr82 = [2, 3]
const arr83 = [2, 3, 4, 6, 8]
const arr86 = intersection(arr84, arr82, arr83)
console.log('提取数组相同元素', arr86) // [2,3]

// 3.0、数组切分
const arr31 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ary32 = chunk(arr31, 3)
console.log('数组切分', ary32) // [[1,2,3],[4,5,6],[7,8,9]]

//4.0、去除假值
//在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
const arr41 = ['1', '2', ' ', 0, '', NaN, null, undefined, false]
const ary42 = compact(arr41)
console.log('去除假值', ary42)

// 5.0、根据条件去除某个元素
const arr51 = [
  { id: 0, name: 'aaa', age: 33 },
  { id: 0, name: 'bbb', age: 33 },
  { id: 1, name: 'bbb', age: 25 }
]
const ary52 = reject(arr51, ['name', 'bbb'])
console.log('去除元素', ary52) // [{id: 0, name: "aaa", age: 33}]

// 6.0、查找数组
const arr61 = [
  { id: 0, name: 'aaa', age: 33 },
  { id: 0, name: 'bbb', age: 33 },
  { id: 1, name: 'bbb', age: 25 }
]
const ary62 = find(arr61, ['name', 'bbb'])
console.log('查找数组', ary62) //  {id: 0, name: "bbb", age: 33},查找结果的第一个值

// 7.0、过滤数组——根据条件过滤出符合条件的元素，返回新数组
const arr71 = [
  { id: 0, name: 'aaa', age: 33 },
  { id: 1, name: 'bbb', age: 33 },
  { id: 2, name: 'bbb', age: 25 }
]
const ary72 = filter(arr71, ['name', 'bbb'])
console.log('过滤数组', ary72) // [{id: 1, name: "bbb", age: 33},{id: 2, name: "bbb", age: 25}]

// 8.0、从集合中挑出一个key，将其值作为数组返回
const arr81 = [
  { id: 0, name: 'aaa', age: 33 },
  { id: 1, name: 'bbb', age: 33 },
  { id: 2, name: 'bbb', age: 25 }
]
const ary82 = map(arr81, 'name')
console.log('key的值数组', ary82) // ['aaa', 'bbb', 'bbb']

// 9.0、最值
const arr91 = [12, 1, 13, 14, 25]
const ary92 = max(arr91)
console.log('最大值', ary92) // 25
const ary93 = min(arr91)
console.log('最小值', ary93) // 1
const ary94 = sum(arr91)
console.log('数组和', ary94) // 65
