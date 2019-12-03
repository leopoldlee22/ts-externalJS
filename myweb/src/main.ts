/// <reference path="./lib/externalJS/index.d.ts" />
import * as aid from "./lib/externalJS/index"

// root folder content
let inst = new aid.context.cc("typescript");
document.writeln(inst.say());
console.log(inst.say2());
console.log(aid)

// reference's sub folder's content

// func test
console.log(aid.sublib.test())
// local var test
console.log(aid.sublib.getMyvar())
aid.sublib.setMyvar("Ni hao.")
console.log(aid.sublib.getMyvar())
