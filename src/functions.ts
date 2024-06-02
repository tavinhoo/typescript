const sum = (x: number, y: number): number => {
    return x + y;
}

function mutiply(x: number, y: number): number {
    return x * y;
}

// let add = (x: number, y: number): number => {
//     return x + y;
// };

// Com corpo reduzido
let add = (x: number, y: number): number => x + y;


const log = (message: string): void => {
    console.log(message);
}

interface mathFunc {
    (x: number, y: number): number,
}

const subtract: mathFunc = (x: number, y: number) => {
    return x - y;
}