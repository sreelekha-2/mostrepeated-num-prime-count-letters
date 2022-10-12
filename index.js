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
console.log('1.most repeated num');
console.log(testRepeat(arr));

//2.prime or not
let num = 127;
let c = 0;
function isPrime(num) {
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      c++;
    }
  }
  if (c == 2) {
    return true;
  } else {
    return false;
  }
}
console.log('2.check num is prime or not');
console.log(isPrime(num));

//3.count letters
const str = 'fffeerttttoo';
const countObj = {};
for (char of str) {
  if (Object.keys(countObj).includes(char)) {
    countObj[char] = countObj[char] + 1;
  } else {
    countObj[char] = 1;
  }
}
console.log('3.count letters');
console.log(countObj);
const res = Object.keys(countObj).map((key) => `${countObj[key]}${key}`);
console.log(res.join(''));
