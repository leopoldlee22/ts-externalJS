// function test
export function test() : string {
    return "Hi, this is Sub";
}

// local var test
let myvar: string = "Hello, hello!"

export function getMyvar(): string {
    return myvar;
}

export function setMyvar(s: string): void {
    myvar = s;
}