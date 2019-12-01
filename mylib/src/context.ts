import { kc } from "./kernel";

export class cc extends kc {

    constructor(name: string) {
        super(name);
    }

    say2(): string {
        return "Hi, " + this.name;
    }

}