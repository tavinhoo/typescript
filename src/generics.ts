const returnValue = <T>(value: any) => {return value};

const message = returnValue<string>("Generics!");
const count = returnValue<number>(5);

function getFirstValue<T>(array: any[]): T {
    return array[0];
}

const firstValueString = getFirstValue<string>(["1", "2"]);
const firstValueNumber = getFirstValue<number>([1, 2]);


// Promises
const returnPromises = async (): Promise<number> => {
    return 5;
}

// Classes

class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number)=> {
    return x + y;
})