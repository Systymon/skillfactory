function primeNumber(a) {
  if (a % 2 === 0 && a != 2) {
    console.log('Число ' + a + ' составное')
  } else if (a > 999) {
    console.log('Данные неверны')
  } else {
    console.log('Число ' + a + ' простое')
  }
  return a
}
primeNumber(1000)
