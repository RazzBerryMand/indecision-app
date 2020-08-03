class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person("Mand Cashin", 33);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

