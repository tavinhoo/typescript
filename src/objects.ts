// Type
type User = {
    firstName: string,
    lastName?: string, // Com ? lastName se torna opcional
    age: number,
    gender?: Gender,
    email: string,
    password: string
    orders: Order[];
    register(): string
}

type Order = {
    productId: number,
    price: number,
    quantity: number,
}


enum Gender {
    MALE = 1,
    FEMALE = 2
}

const user: User = {
    firstName: "Luiz",
    age:21,
    gender: Gender.MALE,
    email: "luizotavio@gmail.com",
    password: "pswd",
    orders: [{productId: 1, price: 119.00, quantity: 2}],
    register() {
        return "2";
    }
};


console.log(user.lastName); // propriedade nula, mas e aí?

const printLog = (message: string) => {}

printLog(user.lastName!);

// Unions

type Author = {
    books: string[]
};

const author: Author & User = {
    age: 21,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Luiz",
    orders: [],
    register() {
      return "a";
    },
  };

// Interfaces

interface UserInterface {
    readonly firstName: string; // readonly a partir da instanciação se torna imutável, não poderá ser alterado.
    email: string;
}

const emailUser: UserInterface = {
    email: "luizotavio@gmail.com",
    firstName: "Luiz"
}

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "otavio@gmail.com",
    firstName: "Otávio",
    books: []
}