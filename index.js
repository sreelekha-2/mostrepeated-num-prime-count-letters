//1.most repeated num
const arr = [3, 2, 3, 1, 2];
let obj = {};
function testRepeat() {
  arr.forEach((ele) => {
    if (arr.indexOf(ele) !== arr.lastIndexOf(ele)) {
      if (Object.keys(obj).includes(ele.toString())) {
        obj[ele] = obj[ele] + 1;
      } else {
        obj[ele] = 1;
      }
    }
  });
  console.log(obj);

  if (Object.keys(obj).length === 0) {
    return -1;
  } else {
    const res = Object.keys(obj).reduce((acc, value) => {
      if (obj[acc] < obj[value]) {
        return value;
      } else if (obj[acc] === obj[value]) {
        if (arr.indexOf(parseInt(acc)) < arr.indexOf(parseInt(value))) {
          return acc;
        } else {
          return value;
        }
      } else {
        return acc;
      }
    });
    return res;
  }
}
console.log('//most repeated num');
console.log(testRepeat(arr));
