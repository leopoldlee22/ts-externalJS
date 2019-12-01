interface base {
    name: string;
}

interface base2 extends base {
    say(): string;
}

export class kc implements base2 {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    say(): string {
        return "Hello, " + this.name;
    }

}