/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */https://github.com/j-pard/learning-javascript/blob/master/1.exercises/07-classes/03-inheritance/script.js

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Dog extends Animal {
        static greeting = "woof";
        constructor (name) {
            super();
            this.name = name;
        }
    }

    class Cat extends Animal {
        static greeting = "Meeow !";
        constructor (name) {
            super();
            this.name = name;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let king = new Dog("King");
        let kitty = new Cat("Kitty");
        console.log(king.sayHello());
        console.log(kitty.sayHello());
    });
})();
