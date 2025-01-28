const promised = new Promise(resolve => resolve(50))
promised.then(value => value*2)
.then(value => value +10)
.then(value => value - 5)
.then(value => console.log(value))

