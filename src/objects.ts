// Type
type User = {
    firstName: string,
    lastName?: string, // Com ? lastName se torna opcional
    age: number,
    gender?: Gender,
    email: string,
    password: string
    orders: Order[];
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
    orders: [{productId: 1, price: 119.00, quantity: 2}];
};