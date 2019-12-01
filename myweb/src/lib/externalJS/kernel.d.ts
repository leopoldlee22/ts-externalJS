interface base {
    name: string;
}
interface base2 extends base {
    say(): string;
}
export declare class kc implements base2 {
    name: string;
    constructor(name: string);
    say(): string;
}
export {};
