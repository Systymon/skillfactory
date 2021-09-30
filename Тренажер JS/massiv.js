function funcParity() {
  let arry = [0, 1, 2, 3, 4, 5, undefined, 'string']
  let sumOdd = 0
  let sumPar = 0
  for (let num of arry) {
    if (num % 2 === 0 && num !== 0) {
      sumOdd++
    } else if (num === 0) {
      console.log(num)
    } else if (typeof num !== 'number') {
      continue
    } else {
      sumPar++
    }
  }
  console.log('Количество четных чисел ' + sumOdd)
  console.log('Количество нечетных чисел ' + sumPar)
}
funcParity()
