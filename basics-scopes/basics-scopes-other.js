console.log('Here (second file) name is : ', name);

function sayHello() {
    var name = 'Other user'
    console.log('Saying second hello to : ' + name);
}

name = 'Coca'
console.log('After change, new name is : ' + name);

sayHello()
console.log('After second hello, name is : ' + name);
