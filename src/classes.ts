interface IPerson {
    id: number;
    name: string;
    age: number;
    sayName(): string;
    greet(): string;
}


class Person implements IPerson {
    readonly id: number; // não poderá usar um setId, por exemplo
    protected name: string; // dentro da classe ou em subclasses
    private age: number; // só pode ser acessada dentro de classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayName(): string {
        return this.name;
    }

    greet(): string {
        return `Olá, eu sou o ${this.name}!`;
    }
}

const newPerson = new Person(1, "Otávio", 21);

class Employee extends Person {

    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    // whoAmI() {
    //     return this.age; // Impossível (private)
    // }

    whoAmI() {
        return this.name; 
    }
}