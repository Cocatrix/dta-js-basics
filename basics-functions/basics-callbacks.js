var hello = function (name) {
    console.log("Hey, low ", name)
}

function asyncSayHello(name, callback) {
    if(callback && typeof callback === "function") {
        setTimeout(hello, 5000, name)
    }
}

asyncSayHello("Max", hello)
asyncSayHello("rider", hello)