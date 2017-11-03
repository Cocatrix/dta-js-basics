var x
var y

console.log('Plain equality : ', x == y)
console.log('Strict equality : ', x === y)

x = 2
y = 'word'

console.log('Plain equality : ', x == y)
console.log('Strict equality : ', x === y)

x = 2
y = '2'

console.log('Plain equality : ', x == y)
console.log('Strict equality : ', x === y)

x = undefined
y = null

console.log('Plain equality : ', x == y)
console.log('Strict equality : ', x === y)

var a;
var b;
var c;
var d;

a = 20
b = 5

c = a + b
console.log("Result : ", c)

a = 20
b = 'Formation'

c = a + b
console.log("Result : ", c)

a = 20
b = 5
d = 'Formation'

c = a + b + d
console.log("Result : ", c)

a = 20
b = 5
d = 'Formation'

c = a + d + b
console.log("Result : ", c)

a = 20
b = 5
d = 'Formation'

c = d + a + b
console.log("Result : ", c)