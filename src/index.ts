//******************************************************** */
                        // Tipos de dados
//******************************************************** */
const idade: number = 5;
const firstName: string = "Luiz";
const isValid: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let anything: any = 5;
// any = false;
// any = "Falso";
let n: null = null;
let notSure: unknown = 4;

let sym1 = Symbol();
let sym2 = Symbol("key");

//******************************************************** */
                        // Listas
//******************************************************** */
const list: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [false, true];
const strings: string[] = ["Luiz", "Otávio"];

//******************************************************** */
                        // Tuplas
//******************************************************** */
const person: [number, string] = [1, "Luiz"];

//******************************************************** */
                    // Lista de Tuplas
//******************************************************** */
const people: [number, string][] = [
    [1, "Luiz"],
    [2, "Otávio"],
    [3, "NomeQualquer"]
];

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


//******************************************************** */
                        // Intersections
//******************************************************** */
const productId: string | number = 5; // "5";

//******************************************************** */
                        // Enum
//******************************************************** */

enum Color{
    RED = 1,
    GREEN = 2,
    BLUE = 3,
}

const myColor: Color = Color.BLUE;

//******************************************************** */
                        // Type Assertions
//******************************************************** */
const productName: any = "Boné";
// const productKey: string = productName as string;
const productKey = <string>productName;

//******************************************************** */
                        // Object
//******************************************************** */
let obj: object = { name: "John", age: 30 };
