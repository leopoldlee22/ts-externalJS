/// <reference path="./lib/externalJS/index.d.ts" />
import * as aid from "./lib/externalJS/index"


let inst = new aid.context.cc("typescript");
document.writeln(inst.say());
console.log(inst.say2());


console.log(aid)