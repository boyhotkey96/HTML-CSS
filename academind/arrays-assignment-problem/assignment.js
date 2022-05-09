// Session 1
const numbersList = [13, 2, 9, 11, 4, 56, 3, 94, 2];

const numberGreater5 = numbersList.filter(value => value > 5)
console.log(numberGreater5);

const anhXa = numbersList.map(value => ({num: value}))
console.log(anhXa);

const luyThua = numbersList.reduce((curResult, curValue) => curResult * curValue, 1);
console.log(luyThua);



// Session 2+3:
function findMinMax(...numbers) {
  // const max = Math.max.apply(Math, numbers);
  // console.log(max);
  
  // return numbers.reduce((result, item) => {
  //   return result > item ? result : item
  // })

  let curMin = numbers[0];
  let curMax = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}
const [min, max] = findMinMax(1, 22, 3, 4, 6);
console.log('Min: ' + min + ' - ' + 'Max: ' + max);
const [min2, max2] = findMinMax(...numbersList);
console.log('Min2: ' + min2 + ' - ' + 'Max2: ' + max2);



// Sesstion 4
const ids = new Set([1, 2, 3, 5, 5]);
ids.add(4);
ids.add(1);
ids.add(6);
ids.add(3);
console.log(ids)