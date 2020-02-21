function Hello() {
    var name;
    this.setName = (thyName) => {
        name = thyName
    }
    this.sayHello = () => {
        console.log('hello' + name);
    }
}

module.exports = Hello